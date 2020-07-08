const request=require('request')
const forcast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=e7ce462a95c62c9f16b74febc3c59e33&query='+latitude+','+longitude+'&units=f'
    
    request({url,json:true},(error,{ body}={})=>{
        if(error){
            callback('Unable to connect weather services',undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)

        }else{
            callback(undefined, body.current.weather_descriptions[0]+'.It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike +  ' degress out.')
        }
    })
}
module.exports=forcast