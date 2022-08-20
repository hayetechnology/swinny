import {useCookies} from 'react-cookie';

export default class APIService {
    static UpdDateArticle(article_id, body, token){
        return fetch(`http://ec2-18-118-129-70.us-east-2.compute.amazonaws.com:8000/api/articles/${article_id}/`, {
            'method':'PUT',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())

    }

    static InsertArticle(body, token) {

        return  fetch('http://ec2-18-118-129-70.us-east-2.compute.amazonaws.com:8000/api/articles/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Token ${token}`
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteArticle(article_id, token) {
    
        return fetch(`http://ec2-18-118-129-70.us-east-2.compute.amazonaws.com:8000/api/articles/${article_id}/`, {
            'method':'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
            }
        })
    }

    static LoginUser(body) {

        return  fetch('http://ec2-18-118-129-70.us-east-2.compute.amazonaws.com:8000/auth/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',     
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static RegisterUser(body) {

        return  fetch('http://ec2-18-118-129-70.us-east-2.compute.amazonaws.com:8000/api/users/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',     
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }
}