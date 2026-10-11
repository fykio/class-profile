param location string = 'eastus2'
param staticWebAppName string = 'azure-fundamentals-class'

resource staticWebApp 'Microsoft.Web/staticSites@2022-09-01' = {
  name: staticWebAppName
  location: location
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    buildProperties: {
      appLocation: '/'
      apiLocation: ''
      outputLocation: 'dist'
    }
  }
}

output staticWebAppUrl string = 'https://${staticWebApp.properties.defaultHostname}'
