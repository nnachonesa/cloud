import PostSchema from '../schema/PostModel';
export async function timeout_video(key:string) {
  const post = await PostSchema.findOne({ key: key })
  let fechaCreada:string = post.DateCreated,
    fechaCPasada = new Date(Date.parse(fechaCreada)).getTime(),
    fechaHoy = new Date(Date.now()).getTime(),
    fechaDia = Number((fechaHoy-fechaCPasada)/(1000*60*60*24)).toFixed()
  
  console.log(`${fechaCreada}, ${fechaCPasada}, ${fechaHoy}, ${fechaDia}`)
  if(fechaDia > 3) {
    await PostSchema.findOneAndDelete({ key:key })
    return true
  } else return false
}
