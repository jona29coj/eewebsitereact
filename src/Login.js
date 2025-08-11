import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  // ✅ Load form from sessionStorage on first load
  useEffect(() => {
    setIsSignup(false);
    const savedForm = sessionStorage.getItem('loginForm');
    if (savedForm) {
      setFormData(JSON.parse(savedForm));
    }
    setErrors({});
  }, []);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email';

    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Minimum 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Save form to sessionStorage as user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);
    sessionStorage.setItem('loginForm', JSON.stringify(updatedForm));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    const url = isSignup ? 'http://localhost:3001/register' : 'http://localhost:3001/login';

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include' // ✅ include cookie
      });

      const data = await res.json();

      if (res.ok) {
        if (isSignup) {
          setIsSignup(false); // Switch to login mode after successful registration
        }

        setFormData({ email: '', password: '' });
        sessionStorage.removeItem('loginForm'); // ✅ clear form cache
        setErrors({});
        console.log('Auth cookie should now be set in browser ✅');
      } else {
        alert(data.error || 'Something went wrong');
      }

    } catch (err) {
      console.error(err);
      alert('Server error');
    }

    setIsLoading(false);
  };

  return (
    <div className="login-container">
      {/* Background video */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="/login.mp4" type="video/mp4" />
      </video>
      <div className="login-content">
        <div className="login-form-section">
          <div className="login-form-wrapper">
            <div className="login-header">
              <h1>{'Welcome Back'}</h1>
              <p>{ 'Sign in to your account'}</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="Enter your email"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(prev => !prev)}
                    tabIndex={-1}
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <button
                type="submit"
                className={`login-button ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="spinner"></div>
                    Signing In...
                  </>
                ) : (
                  'Login'
                )}
              </button>



            </form>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Login;
