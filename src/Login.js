import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Load form from sessionStorage on first load
  useEffect(() => {
    const savedForm = sessionStorage.getItem('loginForm');
    if (savedForm) {
      setFormData(JSON.parse(savedForm));
    }
    setErrors({});
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // ✅ matches backend {username, password}
        credentials: 'include' // ✅ store encrypted cookie
      });

      const data = await res.json();

      if (res.ok) {
        console.log('Login successful ✅');
        if (data.redirectUrl) {
          window.location.href = data.redirectUrl; // ✅ backend controls redirect
        }
      } else {
        alert(data.error || 'Login failed');
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
              <h1>Elements Dashboard</h1>
              <p>Sign in to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={`form-input ${errors.username ? 'error' : ''}`}
                  placeholder="Enter your username"
                />
                {errors.username && <span className="error-message">{errors.username}</span>}
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
                    style={{ color: '#3f3f3fff' }}
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
