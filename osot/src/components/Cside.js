import { useRef, useState } from "react";
import 'react-material-symbols/rounded'

import { MaterialSymbol } from 'react-material-symbols';

const menuItems = [
  {
    name: localStorage.getItem("fname"),
    icon: "account_circle"
    
  },
  {
    name: "Home",
    icon: "home"
  },
  
  {
    name: "Statistics",
    icon: "bar_chart",
  },
 
  {
    name: "Logout",
    icon: "power_settings_new"
  },



]

const NavHeader = () => (
  <header className="sidebar-header">
    
      
      
    <h1 class="tit" style={{fontSize:40}}>🍃𝑮𝒓𝒆𝒆𝒏𝑶</h1>
      
    
    
  </header>
)

const NavButton = ({ handleNav, name, icon, isActive, hasSubNav }) => (
  <button
    type="button"
    onClick={() => handleNav(name)}
    className={name===localStorage.getItem("fname") || isActive ? "active" : ""}
  >
    {icon && <MaterialSymbol icon={icon} size={26} fill grade={name===localStorage.getItem("fname") || isActive ? 0 : -20} color={name==="Mr.K.Saravanan" || isActive ? 'white' : '#24ed59'} />}
    <span>{name}</span>
    {hasSubNav && <MaterialSymbol icon="expand_more" size={26} fill grade={-25} color="#24ed59"/>}
  </button>
)

const SubMenu = ({ item, activeItem, handleClick }) => {
  const navRef = useRef(null)

  const isSubNavOpen = (item, items) =>
    items.some(i => i === activeItem) || item === activeItem

  return (
    <div
      className={`sub-nav ${isSubNavOpen(item.name, item.items) ? "open" : ""}`}
      style={{
        height: !isSubNavOpen(item.name, item.items)
          ? 0
          : navRef.current?.clientHeight
      }}
    >
      <div ref={navRef} className="sub-nav-inner">
        {item?.items.map(subItem => (
          <NavButton
            onClick={handleClick}
            name={subItem}
            isActive={activeItem === subItem}
          />
        ))}
      </div>
    </div>
  )
}

export const Cside = ({snav}) => {
  const [activeItem, setActiveItem] = useState("")

  const handleClick = item => {
    console.log("activeItem", activeItem)
    setActiveItem(item !== activeItem ? item : "")
  }
  const handleNav=(name)=>{
    snav(name);
  }
  return (
    <aside className="sidebar">
      <NavHeader />
    
    
    
      {menuItems.map(item => (
        <div>
          {!item.items && (
            <NavButton
              handleNav={handleNav}
              name={item.name}
              icon={item.icon}
              isActive={activeItem === item.name}
              hasSubNav={!!item.items}
            />
          )}
          {item.items && (
            <>
              <NavButton
                onClick={handleNav}
                name={item.name}
                icon={item.icon}
                isActive={activeItem === item.name}
                hasSubNav={!!item.items}
              />
              <SubMenu
                activeItem={activeItem}
                handleClick={handleClick}
                item={item}
              />
            </>
          )}
        </div>
      ))}
    </aside>
  )
}
