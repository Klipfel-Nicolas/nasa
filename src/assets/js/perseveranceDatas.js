export  const elementsPerseverance = [
    {
        name:'Navigation Cameras',
        positions: {
            x:.86,
            y:1.97,
            z:-.38
        },
        description: "The navigation cameras help the rover drive safely, particularly when operating autonomously. (one each side)",
        image: "/images/navCam.png",
        more: "Two color stereo Navigation Cameras, called Navcams, help engineers navigate Perseverance safely, particularly when the rover operates autonomously, making its own navigation decisions without consulting controllers on Earth.Located up high on the rover's mast, these two cameras help engineers drive the rover around Mars. They can see an object as small as a golf ball from 82 feet (25 meters) away. Before Perseverance \"drives blind,” the navigation cameras initially help ensure a safe path. Blind-drive mode occurs when engineers command the rover to drive a certain distance in a certain direction, and the rover's computer \"brains\" calculate distance from wheel rotations without looking or checking for wheel slippage."
    },
    {
        name:'WATSON',
        positions: {
            x:.40,
            y:1.9,
            z:-1.9
        },
        description: "WATSON is a camera that acts as a magnifying lens to help SHERLOC see fine detail in rocks and soil."
    },
    {
        name:'Wheels',
        positions: {
            x:1,
            y:.25,
            z:.8
        },
        description: "The wheels are made of aluminium, with cleats for traction and curved titanium spokes for springy support."
    },
    {
        name:'Rover "Up-Look" Camera',
        positions: {
            x:.03,
            y:1.33,
            z:.71
        },
        description:"During landing, this camera watches the descent stage as it lowers the rover on the sky crane."
    },
    {
        name:'Suspension',
        positions: {
            x:.9,
            y:.9,
            z:.2
        },
        description: "The ‘rocker-bogie’ suspension system allows the wheels to traverse uneven obstacles."
    },
    {
        name:'Corring Drill',
        positions: {
            x:.87,
            y:1.90,
            z:-2.05
        },
        description: "The drill is a rotary percussive drill to extract sample cores from rocks."
    },
    {
        name:'PIXL',
        positions: {
            x:.97,
            y:1.89,
            z:-1.73
        },
        description: "PIXL measures the chemical makeup of rocks at a very fine scale."
    },
    {
        name:'UHF Antenna',
        positions: {
            x:-.10,
            y:1.64,
            z:1.19
        },
        description: "The Ultra-High Frequency Antenna transmits data to Earth using the Mars orbiters overhead."
    },
    {
        name:'High-Gain Antenna',
        positions: {
            x:-.55,
            y:1.28,
            z:.13
        },
        description: "This antenna transmits and receives data directly to and from Earth."
    },
    {
        name:'Low-Gain Antenna',
        positions: {
            x:-.89,
            y:1.50,
            z:.56
        },
        description: "This antenna primarily receives data from Earth."
    },
    {
        name:'Rear Hazcams',
        positions: {
            x: -.98,
            y:0.77,
            z:.75
        },
        description: "The Rear Hazard Avoidance Cameras aid in driving, can operate autonomously and avoid obstacles.",
    },
    {
        name:'Name Chips',
        positions: {
            x: -.45,
            y:1.45,
            z:.78
        },
        description: "Three tiny silicon chips carry 10.9 billion names submitted by the public."
    },
    {
        name:'Front Hazcams',
        positions: {
            x: .55,
            y:0.72,
            z:-.80
        },
        description:"The Hazard Avoidance Cameras aid in driving, can operate autonomously and avoid obstacles."
    },
    {
        name:'Rover "Down-Look" Camera',
        positions: {
            x: -.22,
            y:0.77,
            z:-.90
        },
        description: "This camera watches the ground on the dramatic ride to the surface."
    },
    {
        name:'Power Source',
        positions: {
            x:-.62,
            y:1.15,
            z:1.08
        },
        description: "A Multi-Mission Radioisotope Thermoelectric Generator Provides electrical power to the rover."
    },
    {
        name:'Sample Handling',
        positions: {
            x: .42,
            y:1.13,
            z:-.68
        },
        description: "The system is used to collect and store compelling rock and soil samples."
    },

]



//SAVE
/* export  const elementsPerseverance = [
    {
        name:'Navigation Cameras',
        positions: {
            x:-.86,
            y:1.9,
            z:.38
        },
        description: "The navigation cameras help the rover drive safely, particularly when operating autonomously. (one each side)"
    },
    {
        name:'WATSON',
        positions: {
            x:.40,
            y:1.9,
            z:-1.9
        },
        description: "WATSON is a camera that acts as a magnifying lens to help SHERLOC see fine detail in rocks and soil."
    },
    {
        name:'Wheels',
        positions: {
            x:1.2,
            y:.25,
            z:-.1
        },
        description: "The wheels are made of aluminium, with cleats for traction and curved titanium spokes for springy support."
    },
    {
        name:'Rover "Up-Look" Camera',
        positions: {
            x:-.38,
            y:1.35,
            z:-.55
        },
        description:"During landing, this camera watches the descent stage as it lowers the rover on the sky crane."
    },
    {
        name:'Suspension',
        positions: {
            x:.9,
            y:.9,
            z:.2
        },
        description: "The ‘rocker-bogie’ suspension system allows the wheels to traverse uneven obstacles."
    },
    {
        name:'Coring Drill',
        positions: {
            x:.25,
            y:2.1,
            z:2.2
        },
        description: "The drill is a rotary percussive drill to extract sample cores from rocks."
    },
    {
        name:'PIXL',
        positions: {
            x:.05,
            y:1.9,
            z:2
        },
        description: "PIXL measures the chemical makeup of rocks at a very fine scale."
    },
    {
        name:'UHF Antenna',
        positions: {
            x:-0.5049203038215637,
            y:1.6403300762176514,
            z:-1.0829967260360718
        },
        description: "The Ultra-High Frequency Antenna transmits data to Earth using the Mars orbiters overhead."
    },
    {
        name:'High-Gain Antenna',
        positions: {
            x:0.4182400703430176,
            y:1.2838399410247803,
            z:-0.39364156126976013
        },
        description: "This antenna transmits and receives data directly to and from Earth."
    },
    {
        name:'Low-Gain Antenna',
        positions: {
            x:0.4949902594089508,
            y:1.5093191862106323,
            z:-0.9392688870429993
        },
        description: "This antenna primarily receives data from Earth."
    },
    {
        name:'Rear Hazcams',
        positions: {
            x: 0.47235479950904846,
            y:0.779359757900238,
            z:-1.141990303993225
        }
    },
    {
        name:'Name Chips',
        positions: {
            x: 0,
            y:1.4599785804748535,
            z:-0.9064294099807739
        },
        description: "Three tiny silicon chips carry 10.9 billion names submitted by the public."
    },
    {
        name:'Front Hazcams',
        positions: {
            x: -0.07699888199567795,
            y:0.7244836688041687,
            z:0.9721970558166504
        },
        description:"The Hazard Avoidance Cameras aid in driving, can operate autonomously and avoid obstacles."
    },
    {
        name:'Rover "Down-Look" Camera',
        positions: {
            x: 0.6474637389183044,
            y:0.7785854935646057,
            z:0.6681612133979797
        },
        description: "This camera watches the ground on the dramatic ride to the surface."
    },
    {
        name:'Power Source',
        positions: {
            x: 0,
            y:1.1563615798950195,
            z:-1.2492311000823975
        },
        description: "A Multi-Mission Radioisotope Thermoelectric Generator Provides electrical power to the rover."
    },
    {
        name:'Sample Handling',
        positions: {
            x: -0.02116742543876171,
            y:1.1314724683761597,
            z:0.8087384104728699
        },
        description: "The system is used to collect and store compelling rock and soil samples."
    },

] */