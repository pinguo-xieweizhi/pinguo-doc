// Creator: WebInspector 537.36

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group(
    'page_1 - https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
    function () {
      response = http.get(
        'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
        {
          headers: {
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'cache-control': 'max-age=0',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=0, i',
            referer:
              'https://ops-qa.camera360.com/home?_app=VideoBeats&_env=qa&_moduleType=Material',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get('https://ops-qa.camera360.com/umi.eb17202a.css', {
        headers: {
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          Referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://libs.baidu.com/jquery/2.0.0/jquery.min.js', {
        headers: {
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          Referer: 'https://ops-qa.camera360.com/',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://ops-qa.camera360.com/umi.9408e32a.js', {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        },
      })
      response = http.get('https://ops-qa.camera360.com/v1/permissions', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          authorization: '',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1, i',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'x-pg-env': 'qa',
          'x-pg-pageid': '',
          'x-pg-scope': 'VideoBeats',
        },
      })
      response = http.get(
        'https://activity.c360dn.com/q_a624c32fdea39e144581ffa4b670f8a4.png?imageMogr2/thumbnail/500x',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer: 'https://ops-qa.camera360.com/',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/vendors~t__plugin-layout__Layout.029e9cb8.chunk.css',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/vendors~t__plugin-layout__Layout.b613883d.async.js',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/t__plugin-layout__Layout.3d57b9e7.chunk.css',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/t__plugin-layout__Layout.d506dc3a.async.js',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get('https://ops-qa.camera360.com/wrappers.e1290050.chunk.css', {
        headers: {
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          Referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://ops-qa.camera360.com/wrappers.dd0b39b6.async.js', {
        headers: {
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          Referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0&type=1',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get('https://ops-qa.camera360.com/v1/base/scope-env', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          authorization: '',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1, i',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'x-pg-env': 'qa',
          'x-pg-pageid': '',
          'x-pg-scope': 'VideoBeats',
        },
      })
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get('https://ops-qa.camera360.com/v1/base/locales-config', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          authorization: '',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1, i',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'x-pg-env': 'qa',
          'x-pg-pageid': '',
          'x-pg-scope': 'VideoBeats',
        },
      })
      response = http.get('https://ops-qa.camera360.com/v1/questionnaire/get', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          authorization: '',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1, i',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'x-pg-env': 'qa',
          'x-pg-pageid': '',
          'x-pg-scope': 'VideoBeats',
        },
      })
      response = http.get(
        'https://ops-qa.camera360.com/vendors~p__ActivityManage__ActivityDetailManage~p__ActivityManage__ActivityList~p__ContentManagement~43bcd941.86f95f9c.async.js',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/vendors~p__ActivityManage__ActivityDetailManage~p__ContentManagement__ContentAudit__Index~p__Content~80fbd2f3.eaebb236.async.js',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/vendors~p__ActivityManage__ActivityDetailManage~p__ContentManagement__ContentAudit__Index~p__Content~9f37af39.30b2b5ce.async.js',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/vendors~p__ActivityManage__ActivityDetailManage~p__ContentManagement__ContentAudit__Index~p__Content~fe055695.537a35bc.chunk.css',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/vendors~p__ActivityManage__ActivityDetailManage~p__ContentManagement__ContentAudit__Index~p__Content~fe055695.b75f161b.async.js',
        {
          headers: {
            accept: '*/*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'script',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/p__ContentManagement__ContentLaunch__AddLaunch.e8d6c353.chunk.css',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/p__ContentManagement__ContentLaunch__AddLaunch.8900efda.async.js',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get('https://ops-qa.camera360.com/v1/ugc-placing/user-selection-configs', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          authorization: '',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1, i',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'x-pg-env': 'qa',
          'x-pg-pageid': '',
          'x-pg-scope': 'VideoBeats',
        },
      })
      response = http.get('https://ops-qa.camera360.com/v1/system-config/properties', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          authorization: '',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1, i',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'x-pg-env': 'qa',
          'x-pg-pageid': '',
          'x-pg-scope': 'VideoBeats',
        },
      })
      response = http.get(
        'https://ops-qa.camera360.com/v1/ugc-placing/positions/65d46b52d159f0461b812ef4/plans/65fa52b40ebc50c79423e79b',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0&type=2',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get(
        'https://activity.c360dn.com/q_a624c32fdea39e144581ffa4b670f8a4.png?imageMogr2/thumbnail/500x',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer: 'https://ops-qa.camera360.com/',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get('https://ops-qa.camera360.com/v3/material-placing/catalog', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          authorization: '',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1, i',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'x-pg-env': 'qa',
          'x-pg-pageid': '',
          'x-pg-scope': 'VideoBeats',
        },
      })
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0&type=7',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0&type=6',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0&type=5',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0&type=10',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0&type=10',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0&type=11',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get('https://ops-qa.camera360.com/v1/product/position/catalog', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          authorization: '',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1, i',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'x-pg-env': 'qa',
          'x-pg-pageid': '',
          'x-pg-scope': 'VideoBeats',
        },
      })
      response = http.get('https://ops-qa.camera360.com/static/iconfont.4142ba6a.woff2', {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          'if-modified-since': 'Fri, 09 Aug 2024 09:33:12 GMT',
          'if-none-match': '"66b5e258-15b8"',
          origin: 'https://ops-qa.camera360.com',
          priority: 'u=0',
          referer: 'https://ops-qa.camera360.com/umi.eb17202a.css',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'font',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        },
      })
    }
  )

  group(
    'page_2 - https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
    function () {
      response = http.get(
        'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
        {
          headers: {
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'cache-control': 'max-age=0',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            'if-modified-since': 'Fri, 09 Aug 2024 09:33:12 GMT',
            'if-none-match': '"66b5e258-277"',
            priority: 'u=0, i',
            referer:
              'https://ops-qa.camera360.com/home?_app=VideoBeats&_env=qa&_moduleType=Material',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get('https://ops-qa.camera360.com/umi.eb17202a.css', {
        headers: {
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          Referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://libs.baidu.com/jquery/2.0.0/jquery.min.js', {
        headers: {
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          Referer: 'https://ops-qa.camera360.com/',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://ops-qa.camera360.com/umi.9408e32a.js', {
        headers: {
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          Referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://ops-qa.camera360.com/static/iconfont.4142ba6a.woff2', {
        headers: {
          Referer: '',
        },
      })
      response = http.get('https://ops-qa.camera360.com/v1/permissions', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          authorization: '',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1, i',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'x-pg-env': 'qa',
          'x-pg-pageid': '',
          'x-pg-scope': 'VideoBeats',
        },
      })
      response = http.get(
        'https://activity.c360dn.com/q_a624c32fdea39e144581ffa4b670f8a4.png?imageMogr2/thumbnail/500x',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer: 'https://ops-qa.camera360.com/',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/vendors~t__plugin-layout__Layout.029e9cb8.chunk.css',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/vendors~t__plugin-layout__Layout.b613883d.async.js',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/t__plugin-layout__Layout.3d57b9e7.chunk.css',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/t__plugin-layout__Layout.d506dc3a.async.js',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get('https://ops-qa.camera360.com/wrappers.e1290050.chunk.css', {
        headers: {
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          Referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://ops-qa.camera360.com/wrappers.dd0b39b6.async.js', {
        headers: {
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          Referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0&type=1',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get('https://ops-qa.camera360.com/v1/base/scope-env', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          authorization: '',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1, i',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'x-pg-env': 'qa',
          'x-pg-pageid': '',
          'x-pg-scope': 'VideoBeats',
        },
      })
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get('https://ops-qa.camera360.com/v1/base/locales-config', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          authorization: '',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1, i',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'x-pg-env': 'qa',
          'x-pg-pageid': '',
          'x-pg-scope': 'VideoBeats',
        },
      })
      response = http.get('https://ops-qa.camera360.com/v1/questionnaire/get', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          authorization: '',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1, i',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'x-pg-env': 'qa',
          'x-pg-pageid': '',
          'x-pg-scope': 'VideoBeats',
        },
      })
      response = http.get(
        'https://ops-qa.camera360.com/vendors~p__ActivityManage__ActivityDetailManage~p__ActivityManage__ActivityList~p__ContentManagement~43bcd941.86f95f9c.async.js',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/vendors~p__ActivityManage__ActivityDetailManage~p__ContentManagement__ContentAudit__Index~p__Content~80fbd2f3.eaebb236.async.js',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/vendors~p__ActivityManage__ActivityDetailManage~p__ContentManagement__ContentAudit__Index~p__Content~9f37af39.30b2b5ce.async.js',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/vendors~p__ActivityManage__ActivityDetailManage~p__ContentManagement__ContentAudit__Index~p__Content~fe055695.537a35bc.chunk.css',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/vendors~p__ActivityManage__ActivityDetailManage~p__ContentManagement__ContentAudit__Index~p__Content~fe055695.b75f161b.async.js',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/p__ContentManagement__ContentLaunch__AddLaunch.e8d6c353.chunk.css',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/p__ContentManagement__ContentLaunch__AddLaunch.8900efda.async.js',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get('https://ops-qa.camera360.com/v1/ugc-placing/user-selection-configs', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          authorization: '',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1, i',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'x-pg-env': 'qa',
          'x-pg-pageid': '',
          'x-pg-scope': 'VideoBeats',
        },
      })
      response = http.get('https://ops-qa.camera360.com/v1/system-config/properties', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          authorization: '',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1, i',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'x-pg-env': 'qa',
          'x-pg-pageid': '',
          'x-pg-scope': 'VideoBeats',
        },
      })
      response = http.get(
        'https://ops-qa.camera360.com/v1/ugc-placing/positions/65d46b52d159f0461b812ef4/plans/65fa52b40ebc50c79423e79b',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0&type=2',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get(
        'https://activity.c360dn.com/q_a624c32fdea39e144581ffa4b670f8a4.png?imageMogr2/thumbnail/500x',
        {
          headers: {
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            Referer: 'https://ops-qa.camera360.com/',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get('https://ops-qa.camera360.com/v3/material-placing/catalog', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          authorization: '',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1, i',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'x-pg-env': 'qa',
          'x-pg-pageid': '',
          'x-pg-scope': 'VideoBeats',
        },
      })
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0&type=7',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0&type=6',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0&type=5',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0&type=10',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0&type=10',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get(
        'https://ops-qa.camera360.com/v1/field-definitions/search?page=1&pageSize=0&type=11',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            authorization: '',
            cookie:
              'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
            priority: 'u=1, i',
            referer:
              'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-pg-env': 'qa',
            'x-pg-pageid': '',
            'x-pg-scope': 'VideoBeats',
          },
        }
      )
      response = http.get('https://ops-qa.camera360.com/v1/product/position/catalog', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          authorization: '',
          cookie:
            'c360_oa_user_info=MmlNRGFrcWxMVXZtdUoyS095N0JlSlVlV2syR0J1RGowYldzTHdtd3hRb0tIdEhiSGpPcmVXOHJKL1FVaUN5QjNuWnRjODZyMUtLdTQvRzYxc3FBN0g1Q0E3TmduRms3WkdBc1hsVjNUTUpETzVNZEYrUDc3Q2JMU3NwdFNIblJVOUlYeXIwNTdGWVVlWVZmR3JxRi9QZmNKUFh0YWFBM2FIbkF1TzVyL0RjdHNYa3hwajIxMmVaaTh1TjE4ZzhTVVAzdkVQd3ptTTcycHdaY0c3dGFmQT09; email=xieweizhi%40camera360.com; name=%E8%B0%A2%E4%BC%9F%E5%BF%97',
          priority: 'u=1, i',
          referer:
            'https://ops-qa.camera360.com/content/launch/PresetAndProject/list/65d46b52d159f0461b812ef4/edit/65fa52b40ebc50c79423e79b?_app=VideoBeats&_env=qa&_moduleType=UGC&name=UGC-V3%E5%B7%A5%E7%A8%8B&type=edit',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'x-pg-env': 'qa',
          'x-pg-pageid': '',
          'x-pg-scope': 'VideoBeats',
        },
      })
    }
  )

  // Automatically added sleep
  sleep(1)
}
