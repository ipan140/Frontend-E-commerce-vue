const fs = require('fs');
const path = require('path');

const swaggerPath = 'C:/Users/ipanr/Downloads/BE-ecommerce-go/Backend-E-commerce-Go/docs/swagger.json';
const outTypesDir = '../src/types';
const outServicesDir = '../src/services';

const swagger = JSON.parse(fs.readFileSync(swaggerPath, 'utf8'));

// Utility to convert swagger type to TS type
function getTsType(prop) {
  if (!prop) return 'any';
  if (prop.$ref) {
    const ref = prop.$ref.split('/').pop();
    return 'I' + ref.replace(/[^a-zA-Z0-9_]/g, '');
  }
  if (prop.type === 'integer' || prop.type === 'number') return 'number';
  if (prop.type === 'string') return 'string';
  if (prop.type === 'boolean') return 'boolean';
  if (prop.type === 'array') return getTsType(prop.items) + '[]';
  return 'any';
}

function camelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '').replace(/[^a-zA-Z0-9_]/g, '');
}

// Generate Types
let indexTypesCode = `export interface IResponse<T = any> {\n  message?: string;\n  data?: T;\n  meta?: any;\n}\n\n`;

const schemas = swagger.definitions || swagger.components?.schemas || {};
const groupedSchemas = {};

for (const [key, schema] of Object.entries(schemas)) {
  const parts = key.split('.');
  const group = parts.length > 1 ? parts[0] : 'common';
  if (!groupedSchemas[group]) groupedSchemas[group] = [];
  groupedSchemas[group].push({ key, schema });
}

if (!fs.existsSync(outTypesDir)) fs.mkdirSync(outTypesDir, { recursive: true });

for (const [group, items] of Object.entries(groupedSchemas)) {
  const fileName = group + '.ts';
  let typeCode = '';
  
  items.forEach(({ key, schema }) => {
    const interfaceName = 'I' + key.replace(/[^a-zA-Z0-9_]/g, '');
    typeCode += `export interface ${interfaceName} {\n`;
    if (schema.properties) {
      for (const [propName, prop] of Object.entries(schema.properties)) {
        typeCode += `  ${propName}?: ${getTsType(prop)};\n`;
      }
    }
    typeCode += `}\n\n`;
  });
  
  fs.writeFileSync(path.join(outTypesDir, fileName), typeCode);
  indexTypesCode += `export * from './${group}';\n`;
}

fs.writeFileSync(path.join(outTypesDir, 'index.ts'), indexTypesCode);

// Generate Services
const groupedPaths = {};
for (const [url, methods] of Object.entries(swagger.paths)) {
  for (const [method, operation] of Object.entries(methods)) {
    const tag = operation.tags && operation.tags.length > 0 ? operation.tags[0] : 'default';
    if (!groupedPaths[tag]) groupedPaths[tag] = [];
    groupedPaths[tag].push({ url, method, operation });
  }
}

if (!fs.existsSync(outServicesDir)) fs.mkdirSync(outServicesDir, { recursive: true });
let indexServicesCode = '';

for (const [tag, endpoints] of Object.entries(groupedPaths)) {
  const baseName = camelCase(tag);
  const serviceName = baseName + 'Service';
  const fileName = serviceName + '.ts';
  
  let serviceCode = `import api from "@/api/axios";\nimport type { IResponse } from "@/types";\n\n`;
  serviceCode += `export const ${serviceName} = {\n`;
  
  endpoints.forEach((ep) => {
    let funcName = ep.operation.operationId || '';
    if (!funcName) {
       funcName = ep.method + ep.url.replace(/[\/\{\}\-]/g, '_').split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
       funcName = funcName.charAt(0).toLowerCase() + funcName.slice(1);
    }
    funcName = funcName.replace(/-/g, '');
    
    const hasPathParams = ep.url.includes('{');
    const hasBody = ['post', 'put', 'patch'].includes(ep.method);
    
    let args = [];
    if (hasPathParams) args.push('id: string | number');
    if (hasBody) args.push('payload: any');
    
    const argsStr = args.join(', ');
    const urlTemplate = ep.url.replace(/\{([^}]+)\}/g, '${id}');
    
    serviceCode += `  async ${funcName}(${argsStr}): Promise<any> {\n`;
    
    let axiosCall = `await api.${ep.method}<IResponse<any>>(\`${urlTemplate}\``;
    if (hasBody) axiosCall += `, payload`;
    axiosCall += `)`;
    
    serviceCode += `    const response = ${axiosCall};\n`;
    serviceCode += `    return response.data?.data ?? response.data ?? response;\n`;
    serviceCode += `  },\n`;
  });
  
  serviceCode += `};\n`;
  fs.writeFileSync(path.join(outServicesDir, fileName), serviceCode);
  indexServicesCode += `export * from './${serviceName}';\n`;
}

fs.writeFileSync(path.join(outServicesDir, 'index.ts'), indexServicesCode);
console.log('Done generating separate files!');
