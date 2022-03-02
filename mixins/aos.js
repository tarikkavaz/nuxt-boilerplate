import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  beforeMount() {
    AOS.init({})
  },
}
