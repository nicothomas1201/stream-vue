<template>
  <div class="loading">
    <div class="loading-spinner"></div>
  </div>
</template>

<style>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  block-size: 100vh;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #6e31df;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
