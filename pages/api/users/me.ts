export default function handler (req, res){
    if(req.method === 'post') {

        res.json({data:{me: true}})
    }
}