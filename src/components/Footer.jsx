import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../stores/auth';
import { setDarkMode, setLang } from '../stores/site';

function Footer() {
  const dispatch = useDispatch();

  const { dark, language } = useSelector(state => state.site);
  const user = useSelector(state => state.auth);
  const langs = ['en', 'tr'];

  const handleLang = lang => {
    dispatch(setLang(lang));
  };

  return (
    <div>
      {/* Footer */}
      <div>
        {langs.map((lang, index) => {
          return (
            <button
              onClick={() => handleLang(lang)}
              className={lang === language ? 'active' : ''}
              key={index}
            >
              {lang}
            </button>
          );
        })}
      </div>
      <div>
        <button onClick={() => dispatch(setDarkMode())}>
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
      {user && (
        <div>
          <button
            onClick={() => {
              console.log(user);
              dispatch(logout());
            }}
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}

export default Footer;
