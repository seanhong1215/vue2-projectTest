export default {
          //中國地區
          validRule: {
            chinaNumber: (rule, value, callback) => {
            // let reg3 = /^\d{6}(|19|53)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/
            // let reg4 = /^\d{6}(|20|04)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/
            let reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/; //大陆地区身份证验证规则
            // value = value.trim();
        if (value.length === 18) {
            let code = value.split('');
            let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
            let sum = 0;
            let ai = 0;
            let wi = 0;
            for (let i = 0; i < 17; i++) {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            if (parity[sum % 11] != code[17].toUpperCase()) {
              callback(new Error('请输入正确的身份证号'));
          } else if (!reg.test(value)) {
              callback(new Error('请输入正确的身份证号'));
          }  else {
              callback();
          }
          }
            // if(value.length === 18 ){
            //   let code = value.split('')
            //   let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            //   let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
            //   let sum = 0;
            //   let ai = 0;
            //   let wi = 0;
            //   for (let i = 0; i < 17; i++) {
            //       ai = code[i];
            //       wi = factor[i];
            //       sum += ai * wi;
            //   }
            //   if (parity[sum % 11] != code[17].toUpperCase()) {
            //     callback(new Error('请输入正确的身份证号'));
            // } else if(reg4.test(value)){
            //     console.log('20歲以下...不能申請')
            //     callback(new Error('20歲以下...不能申請'))
            // } else if (reg3.test(value)){
            //     console.log('70歲以上...不能申請')
            //     callback(new Error('70歲以上...不能申請'))
            // } else {
            //     console.log('ok')
            //     callback()
            // }
            // }
            
          },
          },
}

