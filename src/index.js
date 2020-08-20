
const yearDom = document.querySelectorAll('.year'),
    monthDom = document.querySelector('.month'),
    weekOfYearDom = document.querySelector('.week-of-year'),
    weekDom = document.querySelector('.week'),
    timeDom = document.querySelector('.time'),
    goTimeDom = document.querySelector('.go-time'),
    now = new Date(),
    year = now.getFullYear(),
    month = now.getMonth() + 1,
    day = now.getDate(),
    getNow = () => {
        const now = new Date(),
            hour = now.getHours(),
            minute = now.getMinutes(),
            second = now.getSeconds();
        return {
            hour, minute, second
        }
    },
    getWeekOfYear = () => {
        var today = new Date();
        var firstDay = new Date(today.getFullYear(), 0, 1);
        var dayOfWeek = firstDay.getDay();
        var spendDay = 1;
        if (dayOfWeek != 0) {
            spendDay = 7 - dayOfWeek + 1;
        }
        firstDay = new Date(today.getFullYear(), 0, 1 + spendDay);
        var d = Math.ceil((today.valueOf() - firstDay.valueOf()) / 86400000);
        var result = Math.ceil(d / 7);
        return result + 1;
    },
    setTime = (nowTime) => {
        const { hour, minute, second } = nowTime
        timeDom.innerHTML = `${hour}:${minute}:${second}`
    },
    timeFn = (d1) => {//di作为一个变量传进来
        //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
        let dateBegin = new Date(d1.replace(/-/g, "/"));//将-转化为/，使用new Date
        let dateEnd = new Date();//获取当前时间
        let dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
        let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
        let leave1 = dateDiff % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
        let hours = Math.floor(leave1 / (3600 * 1000))//计算出小时数
        //计算相差分钟数
        let leave2 = leave1 % (3600 * 1000)    //计算小时数后剩余的毫秒数
        let minutes = Math.floor(leave2 / (60 * 1000))//计算相差分钟数
        //计算相差秒数
        let leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
        let seconds = Math.round(leave3 / 1000)

        const log = dayDiff + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒"
        return log

        // console.log(dateDiff + "时间差的毫秒数", dayDiff + "计算出相差天数", leave1 + "计算天数后剩余的毫秒数"
        //     , hours + "计算出小时数", minutes + "计算相差分钟数", seconds + "计算相差秒数");
    },
    getDiffTime = (time1, time2) => {

        let dateBegin = new Date(time1.replace(/-/g, "/"))
            , dateEnd = new Date(time2)
            , dateDiff = dateEnd.getTime() - dateBegin.getTime()
            , dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000))
        const log = dayDiff + "天 "
        return log
    }


console.log(' --- getDiffTime --- ', getDiffTime('2020-6-1 00:00:00', '2020-6-6 00:00:00'));


// 初始化
yearDom.forEach(item => {
    item.innerHTML = year + ' 年'
})
monthDom.innerHTML = `${month} 月 ${day} 日`
weekOfYearDom.innerHTML = getWeekOfYear() + ' 周'
weekDom.innerHTML = '星期' + '日一二三四五六'.charAt(new Date().getDay())
setTime(getNow())
goTimeDom.innerHTML = timeFn(`${year}-1-1 00:00:00`);
// 循环
setInterval(function () {
    setTime(getNow())
    goTimeDom.innerHTML = timeFn(`${year}-1-1 00:00:00`);
}, 1000)





