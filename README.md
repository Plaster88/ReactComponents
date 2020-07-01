Hello Eric.

You can find components here: /src/components.

componentDidMount() {
  const api = ``;
  axios.get(`${api}`)
    .then(res => {
      const files = res.product_urls;
      this.setState({ files });
    })
}

Insert your api here (for both components) and you can test it.

If you want faster slider you can change it here:
const scrollStep = 700;

I used for testing following:

state = {
  files: [
    {
      url: 'https://www.youtube.com/watch?v=5aF_fLNcnAk',
      type: 'video'
    },
    {
      url: 'https://www.youtube.com/watch?v=yP6VGTtRgMI',
      type: 'video'
    },
    {
      url: 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg',
      type: 'image'
    },
    {
      url: 'https://www.youtube.com/watch?v=yP6VGTtRgMI',
      type: 'video'
    },
    {
      url: 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg',
      type: 'image'
    }
  ],
  activeFile: {
    url: 'https://www.youtube.com/watch?v=5aF_fLNcnAk',
    type: 'video'
  }
}