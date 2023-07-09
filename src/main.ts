import * as core from '@actions/core'
import {crawlSite} from '@giladbeer/node-spider'

async function run(): Promise<void> {
  try {
    await crawlSite({
      configFilePath: core.getInput('configPath'),
      searchEngineOpts: {
        engine: 'algolia',
        algolia: {
          apiKey: process.env.ALGOLIA_ADMIN_API_KEY as string,
          appId: process.env.ALGOLIA_APP_ID as string,
          indexName: process.env.ALGOLIA_INDEX_NAME as string
        },
        generalSettings: {}
      }
    })
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
