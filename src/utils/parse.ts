// post的请求解析
export default class Parse {

  static parseQueryStr (queryStr: string) {
    const queryData: any = {}
    const queryStrList: any = queryStr.split('&')
    for (const queryStr of queryStrList.entries()) {
      const itemList: any = queryStr.split('=')
      queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
    }
    return queryData
  }
  static parsePostData (ctx: any) {
    return new Promise((resolve: any, reject: any) => {
      try {
        let postData: string = ''
        ctx.req.addListener('data', (data: any) => {
          postData += data
        })
        ctx.req.addListener('end', (data: any) => {
          const parseData = this.parseQueryStr(postData)
          resolve(parseData)
        })
      } catch (err) {
        reject(err)
      }
    })
  }
}