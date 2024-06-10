import logo from './logo.svg';
import './App.css';
import Form from './component/formANDLocalStorage';
import Formhandle from './component/formhandling';
import Formikform from './component/formikform';

function App() {
  return(
<div>
<h1>Form Validation</h1>
<Form/><br/><br/>
<h1>Formik and YUP</h1>
<Formhandle/>
<h1>Formik Form</h1>
<Formikform/>
</div>
  )
}

export default App;
