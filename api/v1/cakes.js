const { Router } = require( 'express' );

const router = Router();

router.patch('/api/v1/cakes/:id', (req, res)=>{
  // const cakeId  = req.params.id
  const { id:cakeId } = req.params

  if(cakeId > 100){
    res.status(401).send('Solo Tenemos 100 tipos de pasteles')
  }else{
    res.status(201).send(cakeId)
  }

  
  res.send(cakeId)
})


module.exports = router;