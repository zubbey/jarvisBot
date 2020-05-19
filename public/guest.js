const Guest = function(userid, username, avater){
    this.userid = userid;
    this.username = username;
    this.avater = avater;
    this.messages = [];
    this.createUserEl = function(el){
        this.heading = document.createElement('h2');
        this.heading.setAttribute('class', 'ui header');
        this.image = document.createElement('img');
        this.image.setAttribute('class', 'ui centered small image');
        this.image.setAttribute('src', this.avater);
        this.t = document.createTextNode(this.username);
        this.heading.appendChild(this.t);
        el.appendChild(this.image);
        el.appendChild(this.heading);
    }
};

const person = function(username, avater, date, msg){
    return {
        day: '',
        comments: document.createElement('div'),
        comment: document.createElement('div'),
        content: document.createElement('div'),
        metadata: document.createElement('div'),
        text: document.createElement('p'),
        avatarContainter: document.createElement('a'),
        author: document.createElement('a'),
        img: document.createElement('img'),
        span: document.createElement('span'),
        setAtrr: function(){
            this.comments.setAttribute('class', 'comments');
            this.comment.setAttribute('class', 'comment');
            this.content.setAttribute('class', 'content');
            this.author.setAttribute('class', 'author');
            this.metadata.setAttribute('class', 'metadata');
            this.text.setAttribute('class', 'text');
            this.avatarContainter.setAttribute('class', 'avatar');
            this.img.setAttribute('src', avater);
            this.span.setAttribute('class', 'date');
        },
        setValue: function(){
            switch (date.getDay()) {
                case 1:
                    this.day = 'Monday';
                    break;
                    
                case 2:
                    this.day = 'Tuesday';
                    break;
                case 3:
                    this.day = 'Wednesday';
                    break;
                case 4:
                    this.day = 'Thusday';
                    break;
                case 5:
                    this.day = 'Friday';
                    break;
                case 6:
                    this.day = 'Saturday';
                    break;
                case 7:
                    this.day = 'Sunday';
                    break;  
                default:
                    this.day = 'Today';
                    break;
            }
            this.author.appendChild(document.createTextNode(username));
            this.span.appendChild(document.createTextNode('Sent: '+ this.day +' at '+ date.toLocaleTimeString('en-US').replace(/:\d+ |\CDT/g, ' ')));
            this.text.appendChild(document.createTextNode(msg));
        },
        contructElements: function(){
            this.comments.appendChild(this.comment);
            this.comment.append(this.avatarContainter, this.content);
            this.avatarContainter.appendChild(this.img);
            this.metadata.appendChild(this.span);
            this.content.append(this.author, this.metadata, this.text);
        }
    }
}

export {Guest, person};