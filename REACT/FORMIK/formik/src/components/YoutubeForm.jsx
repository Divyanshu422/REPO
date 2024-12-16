import React from 'react'

const YoutubeForm = () => {
  return (
    <form>
        <label htmlfor='name'>Name</label>
        <input type='text' id='name' name='userName'/>

        <label htmlfor='email'>Email</label>
        <input type='email' id='email' name='userEmail'/>

        <label htmlfor='channel'>Channel</label>
        <input type='text' id='channel' name='userChannel'/>

        <button>Submit</button>
    </form>
  )
}

export default YoutubeForm