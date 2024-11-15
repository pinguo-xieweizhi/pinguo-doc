// Creator: Charles Proxy 4.6.6

import { sleep } from 'k6'
import http from 'k6/http'

export const options = {
  vus: 10,
  duration: '30s',
}

export default function main() {
  let response

  response = http.get(
    'https://camera360-api.camera360.com/v1/operational-positions?codes=Boot&vipStatus=vip',
    {
      headers: {
        'pg-appid': 'Camera360',
        'pg-sign': 'b91ea9a5244b3a8827b6ed41690248c37711da0cf2538b5e28b9faebed06bb5c',
        'user-agent':
          'Camera360/10.02.14 (com.vstudio.camera360; build:100215; iOS 17.5.1) Alamofire/5.5.0',
        'pg-time': '1723519068',
        'pg-screensize': '2962440.0',
        'pg-upgradestamp': '1723265444',
        'pg-usertoken':
          'NXAzR0VDZzd0ZUF6K055aGJ2dUVxWUM3a0tiMlVSdXV0RUFmWFBkZDVJTHRkUjkyMmxQUlR2cXlBVVpEcUdXb2xqcFBWRmRWTDFTdzJ4dno3TXhBdzVmMEdobmF5MVdiVVhlR0RCaUdmMTlHS0hiRnR0TDU0ZXRMZnE5SytjZzViclFqR2UyaERqTHJPdEx0cVZKYUxDQzNjVzJETk9VWg==',
        'pg-ench': '0',
        'pg-density': '458',
        'pg-channel': 'appstore',
        'pg-model': 'iPhone14,5',
        'pg-encb': '0',
        'pg-fv': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-eid': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-appversion': '10.02.14',
        'pg-fa': 'F0501718-AD33-4112-A0DA-CE180F920502',
        'pg-network': 'UNKOWN',
        'pg-initstamp': '1723265445',
        'pg-utcoffset': '28800',
        'pg-osversion': '17.5.1',
        'pg-language': 'zh-Hans',
        'pg-platform': 'iOS',
        'pg-locale': 'zh_CN',
        'accept-language': 'zh-Hans-CN;q=1.0',
        'pg-userid': '66b6f1e67e348066901cf14a',
        'accept-encoding': 'gzip',
        accept: '*/*',
      },
    }
  )

  response = http.get(
    'https://camera360-api.camera360.com/v1/operational-positions?codes=EditPop&vipStatus=vip',
    {
      headers: {
        'pg-appid': 'Camera360',
        'pg-sign': '445a9f4fa84a6a6f1a10396e227e35b80f195e86723ff1af88a164faa341b08e',
        'user-agent':
          'Camera360/10.02.14 (com.vstudio.camera360; build:100215; iOS 17.5.1) Alamofire/5.5.0',
        'pg-time': '1723519068',
        'pg-screensize': '2962440.0',
        'pg-upgradestamp': '1723265444',
        'pg-locale': 'zh_CN',
        'pg-usertoken':
          'NXAzR0VDZzd0ZUF6K055aGJ2dUVxWUM3a0tiMlVSdXV0RUFmWFBkZDVJTHRkUjkyMmxQUlR2cXlBVVpEcUdXb2xqcFBWRmRWTDFTdzJ4dno3TXhBdzVmMEdobmF5MVdiVVhlR0RCaUdmMTlHS0hiRnR0TDU0ZXRMZnE5SytjZzViclFqR2UyaERqTHJPdEx0cVZKYUxDQzNjVzJETk9VWg==',
        'pg-channel': 'appstore',
        'pg-network': 'UNKOWN',
        'pg-model': 'iPhone14,5',
        'pg-fv': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-ench': '0',
        'pg-density': '458',
        'pg-encb': '0',
        'pg-fa': 'F0501718-AD33-4112-A0DA-CE180F920502',
        'pg-eid': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-language': 'zh-Hans',
        'pg-initstamp': '1723265445',
        'pg-utcoffset': '28800',
        'pg-osversion': '17.5.1',
        'pg-platform': 'iOS',
        'pg-appversion': '10.02.14',
        'accept-language': 'zh-Hans-CN;q=1.0',
        'pg-userid': '66b6f1e67e348066901cf14a',
        'accept-encoding': 'gzip',
        accept: '*/*',
      },
    }
  )

  response = http.get(
    'https://camera360-api.camera360.com/v1/operational-positions?codes=HomeFeed&vipStatus=vip',
    {
      headers: {
        'pg-appid': 'Camera360',
        'pg-sign': 'bfd7a00b70ef319e293680bc9a1667b641d45a21a4097f7d3212f28a28aa7c0d',
        'user-agent':
          'Camera360/10.02.14 (com.vstudio.camera360; build:100215; iOS 17.5.1) Alamofire/5.5.0',
        'pg-time': '1723519068',
        'pg-screensize': '2962440.0',
        'pg-upgradestamp': '1723265444',
        'pg-locale': 'zh_CN',
        'pg-ench': '0',
        'pg-density': '458',
        'pg-network': 'UNKOWN',
        'pg-model': 'iPhone14,5',
        'pg-channel': 'appstore',
        'pg-fv': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-eid': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-appversion': '10.02.14',
        'pg-fa': 'F0501718-AD33-4112-A0DA-CE180F920502',
        'pg-usertoken':
          'NXAzR0VDZzd0ZUF6K055aGJ2dUVxWUM3a0tiMlVSdXV0RUFmWFBkZDVJTHRkUjkyMmxQUlR2cXlBVVpEcUdXb2xqcFBWRmRWTDFTdzJ4dno3TXhBdzVmMEdobmF5MVdiVVhlR0RCaUdmMTlHS0hiRnR0TDU0ZXRMZnE5SytjZzViclFqR2UyaERqTHJPdEx0cVZKYUxDQzNjVzJETk9VWg==',
        'pg-language': 'zh-Hans',
        'pg-utcoffset': '28800',
        'pg-initstamp': '1723265445',
        'pg-osversion': '17.5.1',
        'pg-platform': 'iOS',
        'pg-encb': '0',
        'accept-language': 'zh-Hans-CN;q=1.0',
        'pg-userid': '66b6f1e67e348066901cf14a',
        'accept-encoding': 'gzip',
        accept: '*/*',
      },
    }
  )

  response = http.get(
    'https://camera360-api.camera360.com/v2/material-positions?codes=magicSkyEditPanel&vipStatus=vip',
    {
      headers: {
        'pg-appid': 'Camera360',
        'pg-sign': '05beb49d6d025cfec0185097438977e47294ae70b1b6fbfdde3eb06476631039',
        'user-agent':
          'Camera360/10.02.14 (com.vstudio.camera360; build:100215; iOS 17.5.1) Alamofire/5.5.0',
        'pg-time': '1723519068',
        'pg-screensize': '2962440.0',
        'pg-upgradestamp': '1723265444',
        'pg-usertoken':
          'NXAzR0VDZzd0ZUF6K055aGJ2dUVxWUM3a0tiMlVSdXV0RUFmWFBkZDVJTHRkUjkyMmxQUlR2cXlBVVpEcUdXb2xqcFBWRmRWTDFTdzJ4dno3TXhBdzVmMEdobmF5MVdiVVhlR0RCaUdmMTlHS0hiRnR0TDU0ZXRMZnE5SytjZzViclFqR2UyaERqTHJPdEx0cVZKYUxDQzNjVzJETk9VWg==',
        'pg-ench': '0',
        'pg-density': '458',
        'pg-channel': 'appstore',
        'pg-model': 'iPhone14,5',
        'pg-fv': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-encb': '0',
        'pg-eid': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-appversion': '10.02.14',
        'pg-fa': 'F0501718-AD33-4112-A0DA-CE180F920502',
        'pg-network': 'UNKOWN',
        'pg-initstamp': '1723265445',
        'pg-utcoffset': '28800',
        'pg-osversion': '17.5.1',
        'pg-language': 'zh-Hans',
        'pg-platform': 'iOS',
        'pg-locale': 'zh_CN',
        'accept-language': 'zh-Hans-CN;q=1.0',
        'pg-userid': '66b6f1e67e348066901cf14a',
        'accept-encoding': 'gzip',
        accept: '*/*',
      },
    }
  )

  response = http.get(
    'https://camera360-api.camera360.com/v2/material-positions?codes=templateEditPanel&vipStatus=vip',
    {
      headers: {
        'pg-appid': 'Camera360',
        'pg-sign': '33632c25556859ce9cac510d0f2148ac540dc6f8d41e25d86e0243a6ffe608ca',
        'user-agent':
          'Camera360/10.02.14 (com.vstudio.camera360; build:100215; iOS 17.5.1) Alamofire/5.5.0',
        'pg-time': '1723519068',
        'pg-screensize': '2962440.0',
        'pg-upgradestamp': '1723265444',
        'pg-ench': '0',
        'pg-usertoken':
          'NXAzR0VDZzd0ZUF6K055aGJ2dUVxWUM3a0tiMlVSdXV0RUFmWFBkZDVJTHRkUjkyMmxQUlR2cXlBVVpEcUdXb2xqcFBWRmRWTDFTdzJ4dno3TXhBdzVmMEdobmF5MVdiVVhlR0RCaUdmMTlHS0hiRnR0TDU0ZXRMZnE5SytjZzViclFqR2UyaERqTHJPdEx0cVZKYUxDQzNjVzJETk9VWg==',
        'pg-density': '458',
        'pg-channel': 'appstore',
        'pg-model': 'iPhone14,5',
        'pg-fv': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-encb': '0',
        'pg-eid': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-appversion': '10.02.14',
        'pg-fa': 'F0501718-AD33-4112-A0DA-CE180F920502',
        'pg-network': 'UNKOWN',
        'pg-initstamp': '1723265445',
        'pg-utcoffset': '28800',
        'pg-osversion': '17.5.1',
        'pg-language': 'zh-Hans',
        'pg-platform': 'iOS',
        'pg-locale': 'zh_CN',
        'accept-language': 'zh-Hans-CN;q=1.0',
        'pg-userid': '66b6f1e67e348066901cf14a',
        'accept-encoding': 'gzip',
        accept: '*/*',
      },
    }
  )

  response = http.get(
    'https://camera360-api.camera360.com/v4/material-positions/filterCameraShop/categories?vipStatus=vip',
    {
      headers: {
        'pg-appid': 'Camera360',
        'pg-sign': '64ca526714f9f82b40b0d9f10b9de90bd8598204149cc5de0b2569f3081d3346',
        'user-agent':
          'Camera360/10.02.14 (com.vstudio.camera360; build:100215; iOS 17.5.1) Alamofire/5.5.0',
        'pg-time': '1723519069',
        'pg-etag': 'd4f914df21f27408e6fea5c79f5a7fa9',
        'pg-screensize': '2962440.0',
        'pg-upgradestamp': '1723265444',
        'pg-locale': 'zh_CN',
        'pg-usertoken':
          'NXAzR0VDZzd0ZUF6K055aGJ2dUVxWUM3a0tiMlVSdXV0RUFmWFBkZDVJTHRkUjkyMmxQUlR2cXlBVVpEcUdXb2xqcFBWRmRWTDFTdzJ4dno3TXhBdzVmMEdobmF5MVdiVVhlR0RCaUdmMTlHS0hiRnR0TDU0ZXRMZnE5SytjZzViclFqR2UyaERqTHJPdEx0cVZKYUxDQzNjVzJETk9VWg==',
        'pg-density': '458',
        'pg-network': 'WIFI',
        'pg-model': 'iPhone14,5',
        'pg-fv': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-channel': 'appstore',
        'pg-eid': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-ll': '30.54135857865742104.06473763125821',
        'pg-appversion': '10.02.14',
        'pg-ench': '0',
        'pg-initstamp': '1723265445',
        'pg-utcoffset': '28800',
        'pg-fa': 'F0501718-AD33-4112-A0DA-CE180F920502',
        'pg-language': 'zh-Hans',
        'pg-platform': 'iOS',
        'pg-osversion': '17.5.1',
        'pg-encb': '0',
        'accept-language': 'zh-Hans-CN;q=1.0',
        'pg-userid': '66b6f1e67e348066901cf14a',
        'accept-encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
        accept: '*/*',
      },
    }
  )

  response = http.get(
    'https://camera360-api.camera360.com/v4/material-positions/filterEdit/categories?vipStatus=vip',
    {
      headers: {
        'pg-appid': 'Camera360',
        'pg-sign': '16dce4085fb22035b0be5472045b6ee8789da70e5ae7033cc930fb9f12a20812',
        'user-agent':
          'Camera360/10.02.14 (com.vstudio.camera360; build:100215; iOS 17.5.1) Alamofire/5.5.0',
        'pg-time': '1723519069',
        'pg-etag': '0620a25c837b3b62dfb36387161bae55',
        'pg-screensize': '2962440.0',
        'pg-upgradestamp': '1723265444',
        'pg-locale': 'zh_CN',
        'pg-usertoken':
          'NXAzR0VDZzd0ZUF6K055aGJ2dUVxWUM3a0tiMlVSdXV0RUFmWFBkZDVJTHRkUjkyMmxQUlR2cXlBVVpEcUdXb2xqcFBWRmRWTDFTdzJ4dno3TXhBdzVmMEdobmF5MVdiVVhlR0RCaUdmMTlHS0hiRnR0TDU0ZXRMZnE5SytjZzViclFqR2UyaERqTHJPdEx0cVZKYUxDQzNjVzJETk9VWg==',
        'pg-density': '458',
        'pg-channel': 'appstore',
        'pg-model': 'iPhone14,5',
        'pg-fv': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-ench': '0',
        'pg-eid': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-appversion': '10.02.14',
        'pg-ll': '30.54135857865742104.06473763125821',
        'pg-network': 'WIFI',
        'pg-language': 'zh-Hans',
        'pg-utcoffset': '28800',
        'pg-osversion': '17.5.1',
        'pg-fa': 'F0501718-AD33-4112-A0DA-CE180F920502',
        'pg-platform': 'iOS',
        'pg-initstamp': '1723265445',
        'pg-encb': '0',
        'accept-language': 'zh-Hans-CN;q=1.0',
        'pg-userid': '66b6f1e67e348066901cf14a',
        'accept-encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
        accept: '*/*',
      },
    }
  )

  response = http.get(
    'https://camera360-api.camera360.com/v4/material-positions/filterCamera/categories?vipStatus=vip',
    {
      headers: {
        'pg-appid': 'Camera360',
        'pg-sign': '48bb2a05bfa4eb3be4d307fc6ce0e2f21ba88478c89625f7954a24e3ee6d448b',
        'user-agent':
          'Camera360/10.02.14 (com.vstudio.camera360; build:100215; iOS 17.5.1) Alamofire/5.5.0',
        'pg-time': '1723519069',
        'pg-etag': '177c7dcda105fb0a53a59049547205f6',
        'pg-screensize': '2962440.0',
        'pg-upgradestamp': '1723265444',
        'pg-locale': 'zh_CN',
        'pg-ench': '0',
        'pg-density': '458',
        'pg-channel': 'appstore',
        'pg-model': 'iPhone14,5',
        'pg-fv': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-network': 'WIFI',
        'pg-eid': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-appversion': '10.02.14',
        'pg-ll': '30.54135857865742104.06473763125821',
        'pg-fa': 'F0501718-AD33-4112-A0DA-CE180F920502',
        'pg-language': 'zh-Hans',
        'pg-initstamp': '1723265445',
        'pg-osversion': '17.5.1',
        'pg-utcoffset': '28800',
        'pg-platform': 'iOS',
        'pg-usertoken':
          'NXAzR0VDZzd0ZUF6K055aGJ2dUVxWUM3a0tiMlVSdXV0RUFmWFBkZDVJTHRkUjkyMmxQUlR2cXlBVVpEcUdXb2xqcFBWRmRWTDFTdzJ4dno3TXhBdzVmMEdobmF5MVdiVVhlR0RCaUdmMTlHS0hiRnR0TDU0ZXRMZnE5SytjZzViclFqR2UyaERqTHJPdEx0cVZKYUxDQzNjVzJETk9VWg==',
        'pg-encb': '0',
        'accept-language': 'zh-Hans-CN;q=1.0',
        'pg-userid': '66b6f1e67e348066901cf14a',
        'accept-encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
        accept: '*/*',
      },
    }
  )

  response = http.get(
    'https://camera360-api.camera360.com/v4/material-positions/filterEditShop/categories?vipStatus=vip',
    {
      headers: {
        'pg-appid': 'Camera360',
        'pg-sign': '6904fa9e9ec484385d153f7fb31826f9208ee82f058a43ae6ffd1f583b1ad889',
        'user-agent':
          'Camera360/10.02.14 (com.vstudio.camera360; build:100215; iOS 17.5.1) Alamofire/5.5.0',
        'pg-time': '1723519069',
        'pg-etag': '1361ff920b2f6350004f843ee06e3557',
        'pg-screensize': '2962440.0',
        'pg-upgradestamp': '1723265444',
        'pg-locale': 'zh_CN',
        'pg-usertoken':
          'NXAzR0VDZzd0ZUF6K055aGJ2dUVxWUM3a0tiMlVSdXV0RUFmWFBkZDVJTHRkUjkyMmxQUlR2cXlBVVpEcUdXb2xqcFBWRmRWTDFTdzJ4dno3TXhBdzVmMEdobmF5MVdiVVhlR0RCaUdmMTlHS0hiRnR0TDU0ZXRMZnE5SytjZzViclFqR2UyaERqTHJPdEx0cVZKYUxDQzNjVzJETk9VWg==',
        'pg-channel': 'appstore',
        'pg-density': '458',
        'pg-model': 'iPhone14,5',
        'pg-encb': '0',
        'pg-fv': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-eid': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-appversion': '10.02.14',
        'pg-fa': 'F0501718-AD33-4112-A0DA-CE180F920502',
        'pg-ll': '30.54135857865742104.06473763125821',
        'pg-initstamp': '1723265445',
        'pg-language': 'zh-Hans',
        'pg-utcoffset': '28800',
        'pg-ench': '0',
        'pg-platform': 'iOS',
        'pg-osversion': '17.5.1',
        'pg-network': 'WIFI',
        'accept-language': 'zh-Hans-CN;q=1.0',
        'pg-userid': '66b6f1e67e348066901cf14a',
        'accept-encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
        accept: '*/*',
      },
    }
  )

  response = http.get(
    'https://camera360-api.camera360.com/v4/material-positions/filterEdit/materials?cates=6486f1cf42ed1dad1c4328eb%2C648831209ee241b9ab5ff60e%2C6486f1ce42ed1dad1c4328e1%2C6486f1ce42ed1dad1c4328d6%2C6486f1ce42ed1dad1c4328da%2C6486f1ce42ed1dad1c4328db%2C6486f1ce42ed1dad1c4328dc%2C6486f1ce42ed1dad1c4328dd%2C6486f1cf42ed1dad1c4328ef%2C6486f1ce42ed1dad1c4328de&vipStatus=vip',
    {
      headers: {
        'pg-appid': 'Camera360',
        'pg-sign': 'b369a082b9a8698cba9dd22f81170d3ea92a5a7e05283f65e804c68a5b826c01',
        'user-agent':
          'Camera360/10.02.14 (com.vstudio.camera360; build:100215; iOS 17.5.1) Alamofire/5.5.0',
        'pg-time': '1723519069',
        'pg-etag': '4757eaa2e02745abd6082cf29bd3ac5a',
        'pg-screensize': '2962440.0',
        'pg-upgradestamp': '1723265444',
        'pg-locale': 'zh_CN',
        'pg-usertoken':
          'NXAzR0VDZzd0ZUF6K055aGJ2dUVxWUM3a0tiMlVSdXV0RUFmWFBkZDVJTHRkUjkyMmxQUlR2cXlBVVpEcUdXb2xqcFBWRmRWTDFTdzJ4dno3TXhBdzVmMEdobmF5MVdiVVhlR0RCaUdmMTlHS0hiRnR0TDU0ZXRMZnE5SytjZzViclFqR2UyaERqTHJPdEx0cVZKYUxDQzNjVzJETk9VWg==',
        'pg-density': '458',
        'pg-channel': 'appstore',
        'pg-model': 'iPhone14,5',
        'pg-encb': '0',
        'pg-ench': '0',
        'pg-eid': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-network': 'WIFI',
        'pg-fa': 'F0501718-AD33-4112-A0DA-CE180F920502',
        'pg-ll': '30.54135857865742104.06473763125821',
        'pg-language': 'zh-Hans',
        'pg-initstamp': '1723265445',
        'pg-osversion': '17.5.1',
        'pg-utcoffset': '28800',
        'pg-fv': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-platform': 'iOS',
        'pg-appversion': '10.02.14',
        'accept-language': 'zh-Hans-CN;q=1.0',
        'pg-userid': '66b6f1e67e348066901cf14a',
        'accept-encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
        accept: '*/*',
      },
    }
  )

  response = http.get(
    'https://camera360-api.camera360.com/v4/material-positions/filterEditShop/materials?cates=6486f1cf42ed1dad1c4328eb%2C648831209ee241b9ab5ff60e%2C6486f1cf42ed1dad1c4328ed%2C6486f1ce42ed1dad1c4328e1%2C6486f1ce42ed1dad1c4328d6%2C6486f1ce42ed1dad1c4328da%2C6486f1ce42ed1dad1c4328db%2C6486f1ce42ed1dad1c4328dc%2C6486f1ce42ed1dad1c4328d2%2C6486f1ce42ed1dad1c4328dd%2C6486f1ce42ed1dad1c4328de%2C6486f1cf42ed1dad1c4328ef&vipStatus=vip',
    {
      headers: {
        'pg-appid': 'Camera360',
        'pg-sign': '31e05b7f97f116ede23c1dbfda02f9e217577f31764a8823fe9dc2ca1a497aca',
        'user-agent':
          'Camera360/10.02.14 (com.vstudio.camera360; build:100215; iOS 17.5.1) Alamofire/5.5.0',
        'pg-time': '1723519069',
        'pg-etag': '0b11203f3ab451e1bdd596041bf5983a',
        'pg-screensize': '2962440.0',
        'pg-upgradestamp': '1723265444',
        'pg-locale': 'zh_CN',
        'pg-usertoken':
          'NXAzR0VDZzd0ZUF6K055aGJ2dUVxWUM3a0tiMlVSdXV0RUFmWFBkZDVJTHRkUjkyMmxQUlR2cXlBVVpEcUdXb2xqcFBWRmRWTDFTdzJ4dno3TXhBdzVmMEdobmF5MVdiVVhlR0RCaUdmMTlHS0hiRnR0TDU0ZXRMZnE5SytjZzViclFqR2UyaERqTHJPdEx0cVZKYUxDQzNjVzJETk9VWg==',
        'pg-density': '458',
        'pg-channel': 'appstore',
        'pg-model': 'iPhone14,5',
        'pg-encb': '0',
        'pg-fv': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-ench': '0',
        'pg-appversion': '10.02.14',
        'pg-fa': 'F0501718-AD33-4112-A0DA-CE180F920502',
        'pg-eid': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-language': 'zh-Hans',
        'pg-utcoffset': '28800',
        'pg-initstamp': '1723265445',
        'pg-osversion': '17.5.1',
        'pg-platform': 'iOS',
        'pg-ll': '30.54135857865742104.06473763125821',
        'pg-network': 'WIFI',
        'accept-language': 'zh-Hans-CN;q=1.0',
        'pg-userid': '66b6f1e67e348066901cf14a',
        'accept-encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
        accept: '*/*',
      },
    }
  )

  response = http.get(
    'https://camera360-api.camera360.com/v4/material-positions/filterCameraShop/materials?cates=6486f1cf42ed1dad1c4328eb%2C648831209ee241b9ab5ff60e%2C6486f1cf42ed1dad1c4328ed%2C6486f1ce42ed1dad1c4328e1%2C6486f1ce42ed1dad1c4328d6%2C6486f1ce42ed1dad1c4328da%2C6486f1ce42ed1dad1c4328db%2C6486f1ce42ed1dad1c4328dc%2C6486f1ce42ed1dad1c4328d2%2C6486f1ce42ed1dad1c4328dd%2C6486f1cf42ed1dad1c4328e8%2C6486f1cf42ed1dad1c4328ef%2C6486f1ce42ed1dad1c4328de%2C6486f1cf42ed1dad1c4328f1%2C6486f1cf42ed1dad1c4328f3%2C6486f1ce42ed1dad1c4328e4%2C6486f1ce42ed1dad1c4328e5%2C6486f1cf42ed1dad1c4328e7&vipStatus=vip',
    {
      headers: {
        'pg-appid': 'Camera360',
        'pg-sign': '6849ba9404af39103ab06d1748e016871c93e6751532e85f786afc5fb7d8f607',
        'user-agent':
          'Camera360/10.02.14 (com.vstudio.camera360; build:100215; iOS 17.5.1) Alamofire/5.5.0',
        'pg-time': '1723519069',
        'pg-etag': '74ec099ce36ec0c8eb51dbb6796edc20',
        'pg-screensize': '2962440.0',
        'pg-upgradestamp': '1723265444',
        'pg-locale': 'zh_CN',
        'pg-usertoken':
          'NXAzR0VDZzd0ZUF6K055aGJ2dUVxWUM3a0tiMlVSdXV0RUFmWFBkZDVJTHRkUjkyMmxQUlR2cXlBVVpEcUdXb2xqcFBWRmRWTDFTdzJ4dno3TXhBdzVmMEdobmF5MVdiVVhlR0RCaUdmMTlHS0hiRnR0TDU0ZXRMZnE5SytjZzViclFqR2UyaERqTHJPdEx0cVZKYUxDQzNjVzJETk9VWg==',
        'pg-density': '458',
        'pg-channel': 'appstore',
        'pg-model': 'iPhone14,5',
        'pg-encb': '0',
        'pg-fv': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-eid': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-ench': '0',
        'pg-fa': 'F0501718-AD33-4112-A0DA-CE180F920502',
        'pg-network': 'WIFI',
        'pg-language': 'zh-Hans',
        'pg-initstamp': '1723265445',
        'pg-osversion': '17.5.1',
        'pg-utcoffset': '28800',
        'pg-ll': '30.54135857865742104.06473763125821',
        'pg-platform': 'iOS',
        'pg-appversion': '10.02.14',
        'accept-language': 'zh-Hans-CN;q=1.0',
        'pg-userid': '66b6f1e67e348066901cf14a',
        'accept-encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
        accept: '*/*',
      },
    }
  )

  response = http.get(
    'https://camera360-api.camera360.com/v4/material-positions/filterCamera/materials?cates=6486f1cf42ed1dad1c4328eb%2C648831209ee241b9ab5ff60e%2C6486f1cf42ed1dad1c4328ed%2C6486f1ce42ed1dad1c4328e1%2C6486f1ce42ed1dad1c4328d6%2C6486f1ce42ed1dad1c4328da%2C6486f1ce42ed1dad1c4328db%2C6486f1ce42ed1dad1c4328dc%2C6486f1ce42ed1dad1c4328d2%2C6486f1ce42ed1dad1c4328dd%2C6486f1cf42ed1dad1c4328e8%2C6486f1cf42ed1dad1c4328ef%2C6486f1ce42ed1dad1c4328de%2C6486f1cf42ed1dad1c4328f1%2C6486f1cf42ed1dad1c4328f3&vipStatus=vip',
    {
      headers: {
        'pg-appid': 'Camera360',
        'pg-sign': 'a832e0f55486dff27262b212493cd8ed8a3bedc9369adfab2fb2bea1be2ee9da',
        'user-agent':
          'Camera360/10.02.14 (com.vstudio.camera360; build:100215; iOS 17.5.1) Alamofire/5.5.0',
        'pg-time': '1723519069',
        'pg-etag': 'ec3e3d35d5beb11efbaa12efec2ffb61',
        'pg-screensize': '2962440.0',
        'pg-upgradestamp': '1723265444',
        'pg-locale': 'zh_CN',
        'pg-usertoken':
          'NXAzR0VDZzd0ZUF6K055aGJ2dUVxWUM3a0tiMlVSdXV0RUFmWFBkZDVJTHRkUjkyMmxQUlR2cXlBVVpEcUdXb2xqcFBWRmRWTDFTdzJ4dno3TXhBdzVmMEdobmF5MVdiVVhlR0RCaUdmMTlHS0hiRnR0TDU0ZXRMZnE5SytjZzViclFqR2UyaERqTHJPdEx0cVZKYUxDQzNjVzJETk9VWg==',
        'pg-network': 'WIFI',
        'pg-density': '458',
        'pg-model': 'iPhone14,5',
        'pg-encb': '0',
        'pg-fv': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-eid': '271FA431-C9F3-4A0C-A7B7-27BC3A9DC0EB',
        'pg-ll': '30.54135857865742104.06473763125821',
        'pg-fa': 'F0501718-AD33-4112-A0DA-CE180F920502',
        'pg-appversion': '10.02.14',
        'pg-language': 'zh-Hans',
        'pg-initstamp': '1723265445',
        'pg-osversion': '17.5.1',
        'pg-channel': 'appstore',
        'pg-platform': 'iOS',
        'pg-utcoffset': '28800',
        'pg-ench': '0',
        'accept-language': 'zh-Hans-CN;q=1.0',
        'pg-userid': '66b6f1e67e348066901cf14a',
        'accept-encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
        accept: '*/*',
      },
    }
  )

  // Automatically added sleep
  sleep(1)
}
