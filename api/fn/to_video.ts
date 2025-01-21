import PostSchema from '../schema/PostModel';
export async function timeout_video(key:string) {
  const post = await PostSchema.findOne({ key: key })
  let fechaCreada = post?.DateCreated,
    fechaCPasada = new Date(Date.parse(String(fechaCreada))).getTime(),
    fechaHoy = new Date(Date.now()).getTime(),
    fechaDia = Number((fechaHoy-fechaCPasada)/(1000*60*60*24)).toFixed()
  
  console.log(`${fechaCreada}, ${fechaCPasada}, ${fechaHoy}, ${fechaDia}`)
  if(Number(fechaDia) > 3) {
    await PostSchema.findOneAndDelete({ key:key })
    return true
  } else return false
}
