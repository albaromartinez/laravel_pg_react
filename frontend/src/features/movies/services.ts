import {axiosPublic} from "../../utils"

class movieService{
    getAll = async ()=>{
        return axiosPublic.get('/movies')
    }
}
export default new movieService()