import { Username } from './ShowGithubUser';
import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
function App() {
  return (
    
    <Routes>
      <Route path="user/:username" element={<Username />} />
    </Routes>
    
  );
}
export default App;

