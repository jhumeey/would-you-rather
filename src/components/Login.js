import React, {useEffect} from 'react'
import { connect } from 'react-redux'


const Login = (props) => {
 return (
  <>
     <div>Login page</div>
     {/* <form >
         <label for="userSelect">Select User</label>
         <input
           id="userSelect"
           type="select"
           name="select"
         >
           <option value={2} disabled>Please select</option>
           {
             Object.keys(allUsers.users).map(users =>
               <option key={users} value={users}>
                 {allUsers.users[users].name}
               </option>)
           }
         </input>
       <input disabled='' type="submit" value="Submit" />
     </form> */}
  </>
 )

}
const mapStateToProps = ({ allUsers })  => {

  return {
    allUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Login)