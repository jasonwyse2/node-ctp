ctp = require('bindings')('shifctp');
ctp.settings({ log: true});
var trader = ctp.createTrader();

trader.on("connect",function(result){
    console.log("on connected");
    trader.reqUserLogin('','','',function(result,iRequestID){
        console.log('login return val is '+result);
    });

});

trader.on('rspUserLogin',function(requestId, isLast, field, info){
    
    console.log(JSON.stringify(field));
    console.log(info);

    trader.reqQrySettlementInfo('','','',function(result,iRequestID){
        console.log('settlementinfo return val is '+result);

    });
});

trader.on('rqSettlementInfo',function(requestId, isLast, field, info){
    console.log('rqsettlementinfo callback');
    console.log(field);
    console.log(info);

});

trader.on('rtnOrder',function(field){
    console.log(field);
});

trader.on('rspError',function(requestId, isLast, field){
    console.log(JSON.stringify(field));

});

trader.connect('',undefined,0,1,function(result){
    console.log('connect return val is '+result);
});

console.log('continute');
