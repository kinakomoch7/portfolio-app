import portFolioPng from '../common/images/products/portFolio.png'
import publicFundPng from '../common/images/products/publicFund.png'
import bookShelfPng from '../common/images/products/bookShelf.png'
import duplo2Png from '../common/images/products/duplo2.png'

export const PRODUCTIONS = {
  portFolio: {
    message: "port-folio-app",
    cardText: "自分のポートフォリオのアプリです。フレキシブルデザインに対応しています",
    png: portFolioPng,
    url: 'https://portfolio-koide-tomoki.netlify.app'
  },
  publicFund: {
    message: "公金支出可視化app",
    cardText: "TOKYO OPEN DATAにある東京の公金支出を可視化したアプリです。",
    png: publicFundPng,
    url: "https://comforting-monstera-88ed68.netlify.app"
  },
  bookShelf: {
    message: "仮装本棚アプリ",
    cardText: "仮装本棚アプリです。授業でチーム開発を行いました。",
    png: bookShelfPng,
    url: 'https://book-shelf-product.netlify.app'
  },
  duplo2: {
    message: "奢り管理アプリ",
    cardText: "奢り奢られ管理アプリです。React, TypeScript, Material-UI, MySQL, Expressを使用しています。",
    png: duplo2Png,
    url: 'https://github.com/kinakomoch7/duplo2'
  }
}
