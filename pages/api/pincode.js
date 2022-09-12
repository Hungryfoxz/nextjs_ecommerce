export default function handler(req, res) {
    let pincode = {
      "785661" : ['Sivasagar', 'Assam'],
      "785010" : ['Jorhat', 'Assam']
    }
    res.status(200).json(pincode)
  }