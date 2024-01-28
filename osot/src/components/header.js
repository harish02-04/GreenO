import React from 'react'


function Header({OpenSidebar}) {
  return (
    <header className='header' style={{backgroundColor:'#0000009d',height:70,width:'100%',position:'fixed'}}>
        <div className='header-left' style={{marginLeft:90}}>
        <pre class="logo" style={{fontSize:30,paddingTop:15,color:'white'}}>                                                                                                                                                                             <a style={{fontSize:25,padding:10}} class="pro"><i class="uil uil-user-circle"></i>{localStorage.getItem("sname")}<i class="uil uil-angle-down"></i></a></pre>
        
        </div>
    </header>
  )
}

export default Header;