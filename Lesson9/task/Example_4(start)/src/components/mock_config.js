const config = {
  showStatus: true,
  canDeleteUsers: true
};

function fetchConfiguration() {
  return new Promise(resolve => setTimeout(() => resolve(config), 300));
}

export default fetchConfiguration;
