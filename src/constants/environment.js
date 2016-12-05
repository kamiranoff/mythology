const envs = {
  dev: {
    BASE_URL_WS: 'http://localhost:3000/api/',
  },
  // les urls de production tapent en recette avant la mise en production effective
  production: {
    BASE_URL_WS: 'http://localhost:3000/api/',
  },
};

// pour eviter de dupliquer les variables identiques
const envGlobal = {

};

const getEnvironment = () => {
  const chosenEnv = (__DEV__) ? 'dev' : 'production';
  // spread object non disponible hors react
  return Object.freeze(Object.assign(envGlobal, envs[chosenEnv]));
};

export default getEnvironment;
