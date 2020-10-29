import { Component, OnInit } from '@angular/core';
// import { GalleryComponent } from '../gallery/gallery.component';

// import { members } from './models/member';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    // members = MEMBERS;
    MEMBERS = [{
            link: 'yash',
            image: 'https://firebasestorage.googleapis.com/v0/b/linkhub-19f1f.appspot.com/o/lukyjtghcfgjvhkj.jpg?alt=media&token=799ae455-17db-4d8f-b032-fda6840701c3',
            name: 'Yash Agarwal',
            position: 'Director'
        },
        {
            link: 'kritarth',
            image: 'https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/WhatsApp%20Image%202019-06-13%20at%2015.34.13.jpeg?alt=media&token=05fa1654-0315-4990-9048-11bcf0a84600',
            name: 'Kritarth Mittal',
            position: 'Chief Executive Officer'
        },
        {
            link: 'kartik',
            image: 'https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/kartik.jpeg?alt=media&token=f9a8a76f-108e-47de-920f-efa8dde9f155',
            name: 'Kartik Tiwari',
            position: 'Chief Operating Officer'
        },
        {
            link: 'gaurav',
            image: 'https://infinity-effects.firebaseapp.com/gp2.jpg',
            name: 'Gaurav Prasad',
            position: 'Chief Technical Officer'
        },
        {
            link: 'megha',
            image: 'https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/mega.jpeg?alt=media&token=9fc68c3d-fd02-49a7-acfb-8a7bbb91470c',
            name: 'Megha Garg',
            position: 'Director'
        },
        {
            link: 'arshia',
            image: 'https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/arshia.jpeg?alt=media&token=5d9b4685-20a3-48b0-8357-a74afc58ab87',
            name: 'Arshia Agrawal',
            position: 'Human Resource Manager'
        },
        {
            link: 'kriti',
            image: 'https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/kriti.jpeg?alt=media&token=06ad8963-938a-4280-a241-9fdffb1ac719',
            name: 'Kriti Mittal',
            position: 'Region Head MP'
        },
        {
            link: 'rakshita',
            image: 'https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/rakshita.jpeg?alt=media&token=f661137a-e493-4944-9551-04013dc49e76',
            name: 'Rakshita Singhal',
            position: 'Region Head MP'
        },
        {
            link: 'pratik',
            image: 'https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/pratik.jpeg?alt=media&token=8c16ede7-5778-4f88-8080-1a622b773746',
            name: 'Pratik Gupta',
            position: 'Region Head Gujrat'
        },
        {
            link: 'gagan',
            image: 'https://scontent.fdel3-2.fna.fbcdn.net/v/t31.0-8/28337422_1641351655957104_6025207303121644801_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=i1fHTy6XqwoAX9VdnqZ&_nc_ht=scontent.fdel3-2.fna&oh=34f29d43340ff8856b86a7d1e87103ba&oe=5F3ABA8C',
            name: 'Gagan Goel',
            position: 'Manager'
        },
        {
            link: 'shivang',
            image: 'https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/WhatsApp%20Image%202019-06-13%20at%2015.34.05.jpeg?alt=media&token=7961ae51-d1b1-42ef-ac60-feb6bdee3d14',
            name: 'Shivang Kaul',
            position: 'Mobile Application Developer'
        },
        {
            link: 'vishal',
            image: 'https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/vishal.jpeg?alt=media&token=a7504449-b540-4461-ba68-1e039c15c353',
            name: 'Vishal Sharma',
            position: 'Marketeer'
        }
    ];

    // ng-lottie
    public weblottie: Object;
    public applottie: Object;
    public marketinglottie: Object;
    private anim: any;
    private animationSpeed: number = 1;

    focus;
    focus1;
    constructor() { 
        this.weblottie = {
            path: 'assets/lottie/web.json',
            renderer: 'canvas',
            autoplay: true,
            loop: true
        };
        this.applottie = {
            path: 'assets/lottie/app.json',
            renderer: 'canvas',
            autoplay: true,
            loop: true
        };
        this.marketinglottie = {
            path: 'assets/lottie/marketing.json',
            renderer: 'canvas',
            autoplay: true,
            loop: true
        };
    }
    handleAnimation(anim: any) {
        this.anim = anim;
    }

    stop() {
        this.anim.stop();
    }

    play() {
        this.anim.play();
    }

    pause() {
        this.anim.pause();
    }

    setSpeed(speed: number) {
        this.animationSpeed = speed;
        this.anim.setSpeed(speed);
    }

    ngOnInit() {}
}
