export default {
          //中國地區
          validRule: {
            chinaNumber: (rule, value, callback) => {
            let reg1 = /^(1|5|6|9)\d{5}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])(\d{3})[0-9Xx]$/
            let reg2 = /^(1|5|6|9)\d{5}(18|19|20)(\d{2})(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])(\d{2})[0-9Xx]$/
            // value = value.trim()
            if(value.length === 18 || value.length === 15){
              // let code = value.split('')
              if(reg1.test(value)){
                console.log('20歲以下...不能申請')
              callback(new Error('20歲以下...不能申請'))
            } else if (reg2.test(value)){
                console.log('70歲以上...不能申請')
              callback(new Error('70歲以上...不能申請'))
            } else {
                console.log('ok')
              callback()
            }
            }
            
          },
          },
}

