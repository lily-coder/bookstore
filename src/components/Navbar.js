/* eslint no-unused-vars: 0 no-undef: 0 */
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/Categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <>
      <div className='navbar'>
        <h2 className='blue header'>BookStore CMS</h2>
        <div className='navbar-links'>
        {links.map((link) => (
          <p key={link.id} className='nav-item'>
            <NavLink to={link.path} activeClassName="active-link" exact>
                {link.text}
            </NavLink>
          </p>
        ))}
        </div>
        <div className='fa-user'><FaUser/></div>
      </div>
    </>
  );
};

export default Navbar;