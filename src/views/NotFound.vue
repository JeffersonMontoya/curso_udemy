<template>
    <div class="notfound-container">
      <h1 class="error-code">404</h1>
      <p class="error-message">Página no encontrada</p>
      <p class="error-desc">
        La ruta que intentas visitar no existe o fue movida.
      </p>
  
      <router-link to="/" class="home-btn">
        Volver al inicio
      </router-link>
    </div>
  </template>
  
  <style scoped>
  .notfound-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #f2f4f7;
    padding: 20px;
  }
  
  .error-code {
    font-size: 120px;
    margin: 0;
    font-weight: 800;
    color: #ff4757;
    animation: float 2s ease-in-out infinite;
  }
  
  .error-message {
    font-size: 28px;
    font-weight: 600;
    margin-top: 10px;
    color: #2f3542;
  }
  
  .error-desc {
    font-size: 16px;
    color: #57606f;
    margin-bottom: 30px;
  }
  
  .home-btn {
    background: #1e90ff;
    color: white;
    padding: 12px 25px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 16px;
    transition: 0.3s;
  }
  
  .home-btn:hover {
    background: #0c70d4;
  }
  
  /* Animación suave del número */
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  </style>
  