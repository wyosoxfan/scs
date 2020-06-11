const HomePage = { template: '#homePage' };
const GetStarted = { template: '#get-started' };
const HelpMyself = { template: '#help-myself' };
const HelpFamily = { template: '#help-family' };
const HelpFriend = { template: '#help-friend' };
const PaymentInfo = { template: '#payment-info' };
const MentalHealth = { template: '#mental-health' };
const SubstanceAbuse = { template: '#substance-abuse' };
const ChildrenAdolescents = { template: '#child-adolescents' };
const Psychosocial = { template: '#psychosocial' };
const Prevention = { template: '#prevention' };
const Employment = { template: '#employment' };
const EmployeeCenter = { template: "#employee-center" };
const CaseManagement = { template: "#case-management" };
const ConsentToTreat = { template: "#consent-to-treat" };
const ContactUs = { template: "#contact-us" };
const EmploymentApplication = { template: "#employment-application" };
const EmploymentJobDetails = { template: "#employment-job-details" };
const EmploymentSuccessful = { template: "#employment-successful" };
const Evaluation = { template: "#evaluation" };
const FullCalendar = { template: "#fullcalendar" };
const MentalHealthCalendar = { template: "#mental-health-calendar" };
const MentalTest = { template: '#mental-test' };
const PsychiatricServices = { template: '#psychiatric-services' };
const PsychologicalEvaluations = { template: '#psychological-evaluations' };
const PsychosocialCalendar = { template: '#psychosocial-calendar' };
const SubstanceAbuseCalendar = { template: '#substance-abuse-calendar' };
const Survey = { template: '#survey' };
const TestCalendar = { template: '#test-calendar' };

const routes = [
    { path: '/', component: HomePage },
    { path: '/get-started', component: GetStarted },
    { path: '/help-myself', component: HelpMyself },
    { path: '/help-family', component: HelpFamily },
    { path: '/help-friend', component: HelpFriend },
    { path: '/payment-info', component: PaymentInfo },
    { path: '/mental-health', component: MentalHealth },
    { path: '/substance-abuse', component: SubstanceAbuse },
    { path: '/child-adolescents', component: ChildrenAdolescents },
    { path: '/psychosocial', component: Psychosocial },
    { path: '/prevention', component: Prevention },
    { path: '/employment', component: Employment },
    { path: '/employee-center', component: EmployeeCenter },
    { path: '/case-management', component: CaseManagement },
    { path: '/consent-to-treat', component: ConsentToTreat },
    { path: '/contact-us', component: ContactUs },
    { path: '/employment-application', component: EmploymentApplication },
    { path: '/employment-job-details', component: EmploymentJobDetails },
    { path: '/employment-successful', component: EmploymentSuccessful },
    { path: '/evaluation', component: Evaluation },
    { path: '/fullcalendar', component: FullCalendar },
    { path: '/mental-health-calendar', component: MentalHealthCalendar },
    { path: '/mental-test', component: MentalTest },
    { path: '/psychiatric-services', component: PsychiatricServices },
    { path: '/psychological-evaluations', component: PsychologicalEvaluations },
    { path: '/psychosocial-calendar', component: PsychosocialCalendar },
    { path: '/substance-abuse-calendar', component: SubstanceAbuseCalendar },
    { path: '/survey', component: Survey },
    { path: '/test-calendar', component: TestCalendar }
];

const router = new VueRouter({
    routes
});

Vue.directive('scroll', {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)){
                window.removeEventListener('scroll', f);
            }
        }

        window.addEventListener('scroll', f);
    }
});

var vm = new Vue({
    el: '#app',
    router,
    methods: {
        beforeEnter: function (el) {
            if (window.scrollY > 50) {
                el.setAttribute(
                    'style',
                    'opacity: 1; transform: translate3d(0, -10px, 0)'
                );
            }

            return window.scrollY > 100;
        },
        handleScroll: function (evt, el) {
            if (window.scrollY > 50) {
                el.setAttribute(
                    'style',
                    'opacity: 1; transform: translate3d(0, -10px, 0)'
                );
            }

            return window.scrollY > 100;
        }
    }
});
