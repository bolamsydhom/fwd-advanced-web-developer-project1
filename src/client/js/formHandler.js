import  checkUrl  from './checkURL'
import 'babel-polyfill'

const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json().then((res) => {
            document.getElementById('text').innerHTML = res.data.sentence_list&& res.data.sentence_list[0].text;
            document.getElementById('agreement').innerHTML = res.data.sentence_list&& res.data.sentence_list[0].agreement;
            document.getElementById('subjectivity').innerHTML = res.data.sentence_list&& res.data.subjectivity;
            document.getElementById('confidence').innerHTML = res.data.sentence_list&& res.data.sentence_list[0].confidence;
            document.getElementById('irony').innerHTML = res.data.irony;
            document.getElementById('score_tag').innerHTML = res.data.sentence_list&& res.data.sentence_list[0].score_tag;
            console.log(res);
        })
    } catch (error) {
        console.log(error)
    }
}

const handleSubmit = async () => {
    const inputField = document.getElementById('article-url').value
    if (checkUrl(inputField)) {
        post('http://localhost:8081/add-url', { url: inputField })
    }
}

export default handleSubmit
