import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    // outer wrapper holds full-screen gradient background
    <div
      style={{
        position: "fixed",
        inset: 0, // top:0; right:0; bottom:0; left:0;
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        margin: 0,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* centered card using exact centering (works even if body has margins) */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(420px, 92%)", // responsive width
          maxWidth: "420px",
          padding: "40px",
          background: "rgba(255, 255, 255, 0.96)",
          backdropFilter: "blur(8px)",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
          border: "1px solid rgba(0,0,0,0.04)",
          overflow: "hidden",
        }}
      >
        {/* decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "160px",
            height: "160px",
            background:
              "linear-gradient(45deg, rgba(102,126,234,0.08), rgba(118,75,162,0.08))",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "-40px",
            width: "120px",
            height: "120px",
            background:
              "linear-gradient(-45deg, rgba(102,126,234,0.06), rgba(118,75,162,0.06))",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              borderRadius: "50%",
              margin: "0 auto 26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(102,126,234,0.25)",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#fff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: "700",
                color: "#667eea",
              }}
            >
              🔐
            </div>
          </div>

          <h2
            style={{
              margin: "0 0 8px 0",
              color: "#222",
              fontSize: "26px",
              fontWeight: 700,
            }}
          >
            Welcome Back
          </h2>

          <p
            style={{
              margin: "0 0 28px 0",
              color: "#666",
              fontSize: "15px",
              lineHeight: 1.4,
            }}
          >
            Sign in to your account to continue
          </p>

          <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "18px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#555",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.6px",
                }}
              >
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  border: "1.5px solid #e6e9ee",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea";
                  e.target.style.boxShadow =
                    "0 0 0 4px rgba(102,126,234,0.06)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e6e9ee";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <div style={{ marginBottom: "22px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#555",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.6px",
                }}
              >
                PASSWORD
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  border: "1.5px solid #e6e9ee",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea";
                  e.target.style.boxShadow =
                    "0 0 0 4px rgba(102,126,234,0.06)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e6e9ee";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "10px",
                border: "none",
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(102,126,234,0.25)",
                transition: "transform 150ms ease, box-shadow 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 14px 38px rgba(102,126,234,0.32)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(102,126,234,0.25)";
              }}
            >
              Sign In
            </button>
          </form>

          <div
            style={{
              marginTop: "22px",
              paddingTop: "18px",
              borderTop: "1px solid #f0f2f5",
            }}
          >
            <p style={{ margin: 0, color: "#888", fontSize: "13px" }}>
              Don't have an account?{" "}
              <a
                href="#"
                style={{
                  color: "#667eea",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
