export default class RequestMaker {
  #url = null;
  #options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  constructor(url, method, body = null) {
    this.setUrl(url);
    this.addOption({
      method: method,
    });

    if (body) {
      this.addOption({
        body: JSON.stringify(body),
      });
    }
  }

  setUrl(url) {
    this.#url = url;
  }

  getUrl() {
    return this.#url;
  }

  setOptions(options) {
    this.#options = options;
  }

  getOptions() {
    return this.#options;
  }

  addOption(options) {
    this.#options = {
      ...this.#options,
      ...options,
    };
  }

  async send() {
    return await fetch(this.getUrl(), this.getOptions())
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
        throw error;
      });
  }
}
