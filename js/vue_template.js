const Index = { template: `
<html>
<head>
<link href="css/bootstrap-4.4.1.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
</head>
<header>
<div class="jumbotron" id="top-image">
<div class="container">
<div class="row">
 <div class="col">
   <h4 class="text-left">ENRICHING LIVES <br>
     THROUGH WELLNESS, <br>
     RECOVERY, AND HOPE.</h4>
   <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, dicta, cupiditate consequatur necessitatibus quos libero eius ipsum qui sit molestiae.</p>
   <p>&nbsp;</p>
   <p class="text-center"><a class="btn btn-secondary" href="#" role="button">Learn more</a> </p>
 </div>
 <div class="col-lg-8"> <img class="img-fluid" src="images/top-image-lady.png"  alt="Enriching lives through wellness, recover, and hope."/><!--width="684" height="300"--> 
   
 </div>
</div>
</div>
</div>
<div class="row justify-content-end" id="contact-flags">
<div class="icon-square"><a id="phone-square" href="#"><img src="images/spacer.png"  alt=""/></a></div>
<div class="icon-square"><a id="map-square" href="#map-square-map"><img src="images/spacer.png"  alt=""/></a></div>
<div class="icon-square"><a id="facebook-square" href="#"><img src="images/spacer.png" alt=""/></a></div>
</div>
<!-- <div id="map-square-map" style="background-color:#003366; padding:10px 10px 5px 5px; color:#fff;">
<div class="col">
 <h7 >Southwest Counseling Services - <strong>Main Office</strong></h7> <br>
 <h7>2300 Foothill Blvd. Rock Springs, WY 82901</h7><br>
 <h7>307.352.6677</h7>
 <div>&nbsp;</div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.5914664102224!2d-109.26482877544296!3d41.578085622542986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875a61721ad81d6f%3A0xc1abc141307a6f6!2sSouthwest%20Counseling%20Services!5e0!3m2!1sen!2sus!4v1584149189405!5m2!1sen!2sus" width="350" height="300" frameborder="0" style="border:2px solid #000;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>
</div>--> 

</header>
<section class="header-title">
<div class="container">
<div class="row ">
 <div class="col text-center"> <a href="#" ><img class="rounded-circle" alt="140x140" style="width: 140px; height: 140px;" src="images/help-myslelf-icon.png" data-holder-rendered="true">
   <h4 style="margin-top:10px;">Help For Myself</h4>
   </a> </div>
 <div class="col text-center"> <a href="#" > <img class="rounded-circle" alt="140x140" style="width: 140px; height: 140px;" src="images/help-family-icon.png" data-holder-rendered="true">
   <h4 style="margin-top:10px;">Help For My Family</h4>
   </a> </div>
 <div class="col text-center"> <a href="#" ><img class="rounded-circle" alt="140x140" style="width: 140px; height: 140px;" src="images/help-friend-icon.png" data-holder-rendered="true">
   <h4 style="margin-top:10px;">Help For a Friend</h4>
   </a> </div>
</div>
</div>
</section>
<section class="survey-section">
<div class="container">
<div class="row">
 <p>&nbsp; </p>
</div>
<div class="row no-gutters"  >
 <div class="col d-flex survey-box" >
   <div class="col" style="padding:0;"> <img alt="" style="width: 300px; margin:0; padding:0 " src="images/stock-photo-sad-young-man-in-white-t-shirt-is-looking-at-glass-of-beer-while-sitting-at-bar-counter-in-pub-in-386500174.jpg"  data-holder-rendered="true"> </div>
   <div class="col align-self-center">
     <p class="text-center" style="font-size: 18px;">Has your drinking <br>
       become a problem?</p>
     <p class="text-center"><a class="btn button-white" href="#" role="button">Find Out</a> </p>
   </div>
 </div>
 <div class="col d-flex survey-box" >
   <div class="col" style="padding:0;"> <img alt="" style="width: 300px; " src="images/stock-photo-a-woman-sitting-alone-and-depressed-345397208.jpg" data-holder-rendered="true"> </div>
   <div class="col align-self-center" >
     <p class="text-center" style="font-size: 18px;">Is your sadness normal?</p>
     <p class="text-center"><a class="btn button-white" href="#" role="button">Find Out</a> </p>
   </div>
 </div>
</div>
<div class="row no-gutters" >
 <div class="col d-flex survey-box">
   <div class="col" style="padding:0;"> <img alt="" style="width: 300px; margin:0; padding:0 " src="images/stock-photo-a-young-sales-person-in-elegant-suit-sitting-with-paper-on-top-of-a-stone-in-the-clouds-concept-496908091.jpg" data-holder-rendered="true"> </div>
   <div class="col align-self-center">
     <p class="text-center" style="font-size: 18px;">Do you isolate <br>
       yourself too much?</p>
     <p class="text-center"><a class="btn button-white" href="#" role="button">Find Out</a> </p>
   </div>
 </div>
 <div class="col d-flex survey-box">
   <div class="col" style="padding:0;"> <img alt="" style="width: 300px;" src="images/stock-photo-man-comforting-his-depressed-friend-in-bar-388576783.jpg" data-holder-rendered="true"> </div>
   <div class="col align-self-center" >
     <p class="text-center" style="font-size: 18px;">Do you feel like people would be happier without you?</p>
     <p class="text-center"><a class="btn button-white" href="#" role="button">Find Out</a> </p>
   </div>
 </div>
</div>
</div>
</section>
<section class="do-not-wait">
<div class="jumbotron waitSection">
<div class="container">
 <div class="flex-column">
   <p>&nbsp;</p>
   <div class="text-center mx-auto">
     <p class="lead">Do You Need Help Now?</p>
   </div>
   <div class="text-center mx-auto">
     <p class="lead">Immediate Assistance&nbsp; &amp;&nbsp; 24 / 7 Emergency</p>
   </div>
   <div class="col-sm-4 text-center mx-auto"> <a class="btn btn-block btn-success button-orange" href="#" title=""> <img src="images/phone.svg" alt=""/>&nbsp; &nbsp;307.352.6677</a> </div>
   <p>&nbsp;</p>
 </div>
</div>
</div>
</section>
<section class="services-section">
<div class="container">
<div class="row">
 <div >
   <h5>SERVICES</h5>
 </div>
</div>
<div class="row" style="margin-bottom:10px" >
 <div class="col top-padding"> <a href="evaluations.html" >
   <div class="servicesSection"><img alt="" src="images/evaluations-blue.png"  data-holder-rendered="true">
     <p>EVALUATIONS &amp; ASSESSMENTS</p>
   </div>
   </a> </div>
 <div class="col top-padding"> <a href="mental-health.html" >
   <div class="servicesSection"><img alt="" src="images/mentalHealth-blue.png" data-holder-rendered="true">
     <p>MENTAL HEALTH</p>
   </div>
   </a> </div>
 <div class="col top-padding"> <a href="substance-abuse.html" >
   <div class="servicesSection"><img alt="" src="images/substanceAbuse-blue.png"  data-holder-rendered="true">
     <p>SUBSTANCE ABUSE</p>
   </div>
   </a> </div>
 <div class="col top-padding"> <a href="child-adolescents" >
   <div class="servicesSection"> <img alt="" src="images/children-blue.png" data-holder-rendered="true">
     <p>CHILDREN &amp; ADOLESCENTS</p>
   </div>
   </a> </div>
</div>
<div class="row" style="margin-bottom:20px" >
 <div class="col top-padding"> <a href="psychosocial.html" >
   <div class="servicesSection"><img alt="" src="images/psychosocial-blue.png"  data-holder-rendered="true">
     <p>PSYCHOSOCIAL</p>
   </div>
   </a> </div>
 <div class="col top-padding"> <a href="prevention.html" >
   <div class="servicesSection"><img alt="" src="images/prevention-blue.png" data-holder-rendered="true">
     <p>PREVENTION</p>
   </div>
   </a> </div>
 <div class="col top-padding"> <a href="medical-services" >
   <div class="servicesSection"><img alt="" src="images/medicalServices-blue.png"  data-holder-rendered="true">
     <p>MEDICAL SERVICES</p>
   </div>
   </a> </div>
 <div class="col top-padding"> <a href="employment.html" >
   <div class="servicesSection"> <img alt="" src="images/employment-blue.png" data-holder-rendered="true">
     <p>EMPLOYMENT</p>
   </div>
   </a> </div>
</div>
</div>
</section>
<section class="faq-seciont">
<div class="jumbotron faq" id="faq1">
<hr class="orange-line">
<div class="blue-title">
 <div class="container">
   <h5>Frequently Asked Questions</h5>
 </div>
</div>
<div class="container">
 <div class="row">
   <div class="col">
     <div class="faq-text accordion" > <a class="faq-a" href="#faq1" title="">
       <div class="d-flex ">
         <div class="col faq-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
         <div class="col-11 align-middle"><span >What is mental health?</span></div>
       </div>
       </a>
       <div class="faq-content">
         <p>A person who is mentally healthy can generally manage stress, respond appropriately to problems in life, and express emotions in a healthy, productive way. If a person runs into trouble with these sorts of tasks, or has a problem that just can’t be solved, therapy may be a good option to improve mental health.</p>
       </div>
     </div>
     <div class="faq-text accordion"> <a class="faq-a"  href="#faq1"  title="">
       <div class="d-flex ">
         <div class="col faq-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
         <div class="col-11 align-middle"><span >What can I expect at my first appointment?</span></div>
       </div>
       </a>
       <div class="faq-content">
         <p>Plan on spending about two hours at your first appointment. You will be asked to fill out some forms for our agency, including your consent to have treatment at Southwest Counseling Service.</p>
         <p> You will meet with a mental health clinician who will complete an assessment with you on the computer. This person will ask you questions about your history and your reasons for coming in for counseling. At the end of the session, you and your clinician will talk about options for treatment and your treatment plan.</p>
       </div>
     </div>
     <div class="faq-text accordion"> <a class="faq-a"   href="#faq1"  title="">
       <div class="d-flex ">
         <div class="col faq-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
         <div class="col-11 align-middle"><span >What is a sliding fee scale?</span></div>
       </div>
       </a>
       <div class="faq-content">
         <p>This is a subsidized fee scale based on gross household income and the number of people in the household. This is offered because we are partially funded by the state.</p>
       </div>
     </div>
     <div class="faq-text accordion"> <a class="faq-a"  href="#faq1" title="">
       <div class="d-flex ">
         <div class="col faq-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
         <div class="col-11 align-middle"><span >What about confidentiality?</span></div>
       </div>
       </a>
       <div class="faq-content">
         <p>Southwest Counseling Service takes your privacy very seriously, and we work hard to protect your confidentiality. Your information is kept in secure files, and is not shared with anyone without your consent.</p>
         <p> There are some exceptions to that, which are legal reasons that your clinician would have to share information about you without your consent. Those include, but are not limited to, a serious medical emergency or threat to life, legally reportable information about child or adult neglect, or if there is a valid court order requiring information.</p>
         <p> Sometimes people come to Southwest Counseling Service as a result of a court order or because of legal problems. If that is the case, we will usually have you sign a release of information form allowing us to contact your referral source about your therapy. This is often necessary to let the referral source know that you are attending therapy and how you are progressing.</p>
         <p> For more information about all of the limits to confidentiality, as well as information about the employee code of ethics, please view the client information guide.</p>
       </div>
     </div>
   </div>
   <div class="col">
     <div class="faq-text accordion"> <a class="faq-a"   href="#faq1"  title="">
       <div class="d-flex ">
         <div class="col faq-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
         <div class="col-11 align-middle"><span >How do I make an appointment?</span></div>
       </div>
       </a>
       <div class="faq-content">
         <p>You can make an appointment by calling any of our offices directly.</p>
       </div>
     </div>
     <div class="faq-text accordion"> <a class="faq-a"   href="#faq1"  title="">
       <div class="d-flex ">
         <div class="col faq-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
         <div class="col-11 align-middle"><span >How much does a drug and alcohol evaluation cost?</span></div>
       </div>
       </a>
       <div class="faq-content">
         <p>The total cost for this evaluation is $240. You may make payment arrangements with the clerical staff if you will not be able to pay in full. Also, please be aware that we will notify referral resources, such as probation, courts, etc., of payment and non-payment.</p>
         <p> Finally, if you have had an evaluation or addiction severity index (ASI) assessment completed in the past three months, SCS will require a copy and there will be no additional charge for this portion of the assessment. The cost with a previous ASI included is based on our sliding fee scale.</p>
       </div>
     </div>
     <div class="faq-text accordion"> <a class="faq-a" href="#faq1"  title="">
       <div class="d-flex ">
         <div class="col faq-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
         <div class="col-11 align-middle"><span >What is residential treatment?</span></div>
       </div>
       </a>
       <div class="faq-content">
         <p>Rosen Recovery, Therapeutic Community, and Women’s Addiction Program are all residential treatment programs where individuals reside in Southwest Counseling Service housing during the substance abuse treatment program. Each program has various lengths of stay ranging from four months to more than one year.</p>
       </div>
     </div>
     <div class="faq-text accordion"> <a class="faq-a" href="#faq1"  title="">
       <div class="d-flex ">
         <div class="col faq-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
         <div class="col-11 align-middle"><span >What are the hours of operation?</span></div>
       </div>
       </a>
       <div class="faq-content">
         <p>8:00am - 5:00pm</p>
       </div>
     </div>
   </div>
 </div>
<div class="row">
     <p>&nbsp;</p>
 </div>
</div>
</div>
</section>
<section class="latest-news">
<div class="row">
<div class="col-sm-6 col-lg-6"> <img src="images/stock-photo-psychological-guidance-521585995.jpg" width="100%"  alt=""/> </div>
<div class="col-sm-6 col-lg-6 news left-right-padding">
 <h5 style="margin-top: 15px;">LATEST NEWS</h5>
 <hr class="orange-line-thin" style="">
 <h7><strong>March 1, 2020</strong></h7>
 <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
 <a href="#" class="readMore" >Read More...</a>
 <p>&nbsp;</p>
 <h7><strong>February 14, 2020</strong></h7>
 <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
 <a href="#" class="readMore" >Read More...</a>
 <p>&nbsp;</p>
 <h7><strong>February 1, 2020</strong></h7>
 <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
 <a href="#" class="readMore" >Read More...</a>
 <p>&nbsp;</p>
</div>
</div>
</section>
<section class="payment-secion">
<div class="jumbotron payment">
<hr class="orange-line">
<div class="blue-title">
 <div class="container">
   <h5>PAYMENT INFORMATION</h5>
 </div>
</div>
<div class="container">
 <div class="row text-center mr-auto justify-content-center blue-background" style="padding:25px 0 10px 0;">
   <div class="col" id="slidingFee" ><a href="#" ><img src="images/spacer-200.png" width="200px" alt=""/></a></div>
   <div class="col" id="insurance" ><a href="#" ><img src="images/spacer-200.png" width="200px"   alt=""/></a></div>
   <div class="col" id="medicare" ><a href="#" ><img src="images/spacer-200.png" width="210px"   alt=""/></a></div>
   <div class="col" id="medicaid" ><a href="#" ><img src="images/spacer-200.png" width="210px"  alt=""/></a></div>
   <div class="col" id="eap" ><a href="#" ><img src="images/spacer-200.png" width="210px"  alt=""/></a></div>
 </div>
</div>
</div>
</section>
<section class="location-section">
<div class="container" >
<div class="row"> </div>
<div >
 <h5>SCS LOCATIONS</h5>
 <hr class="orange-line-thin" style="width:170px;">
</div>
<div class="row justify-content-center "><!--row-cols-3-->
 <div class="col">
   <div>&nbsp;</div>
   <h7 >Southwest Counseling Services - <strong>Main Office</strong></h7>
   <br>
   <h7>2300 Foothill Blvd. Rock Springs, WY 82901</h7>
   <br>
   <h7>Phone: (307) 352-6677</h7>
   <br>
   <h7>Fax:(307) 352-6614</h7>
   <br>
   <h7>Hours: 8:00am - 5:00pm </h7>
   <div>&nbsp;</div>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.5914664102224!2d-109.26482877544296!3d41.578085622542986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875a61721ad81d6f%3A0xc1abc141307a6f6!2sSouthwest%20Counseling%20Services!5e0!3m2!1sen!2sus!4v1584149189405!5m2!1sen!2sus" width="350" height="300" frameborder="0" style="border:2px solid #000;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
 </div>
 <div class="col">
   <div>&nbsp;</div>
   <h7>Southwest Counseling Services - <strong>Mental Health</strong></h7>
   <br>
   <h7>1124 College Dr. Rock Springs, WY 82901</h7>
   <br>
   <h7>Phone: (307) 352-6680</h7>
   <br>
   <h7>Fax: (307) 352-6676</h7>
   <br>
   <h7>Hours: 8:00am - 5:00pm </h7>
   <br>
   <div>&nbsp;</div>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.30783232254!2d-109.23738235111409!3d41.584222805473736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875a61189a7b7009%3A0x6547fdf9c6cbc427!2sSouthwest%20Counseling%20Services!5e0!3m2!1sen!2sus!4v1584149630327!5m2!1sen!2sus" width="350" height="300" frameborder="0" style="border:2px solid #000;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
 </div>
 <div class="col">
   <div>&nbsp;</div>
   <h7 >Southwest Counseling Services - <strong>Green River</strong></h7>
   <br>
   <h7>115 E. Flaming Gorge Way Green River, WY 82935</h7>
   <br>
   <h7>(307) 872-3205</h7>
   <br>
   <h7>Hours: 8:00am - 5:00pm </h7><br><br>
   <div>&nbsp;</div>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.8781971093235!2d-109.4683197841813!3d41.52857897925135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875a7dde55555555%3A0x3fae44f210f3efad!2sSouthwest%20Counseling%20Service!5e0!3m2!1sen!2sus!4v1584150269094!5m2!1sen!2sus" width="350" height="300" frameborder="0" style="border:2px solid #000;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
 </div>
</div>
</div>
</section>
<script src="js/jquery-3.4.1.min.js"></script> 
<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/popper.min.js"></script> 
<script src="js/bootstrap-4.4.1.js"></script>
<script type="text/javascript" src="js/test.js"></script> 
<script src="js/function.js"></script> 
<script src="js/test.js"></script>
</html>
` }
const SubstanceAbuse = { template: `
<html>
<head>
<link href="css/bootstrap-4.4.1.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
</head>
<div class="jumbotron" id="top-image">
<div class="container">
  <div class="row">
    <div class="col"> 
      <!--<h4 class="text-left">ENRICHING LIVES <br>
THROUGH WELLNESS, <br>
RECOVERY, AND HOPE.</h4>-->
      <p class="text-left">Many times people don’t recognize the power of alcohol or drugs in their lives until they are confronted by a concerned friend or family member, or until they get into trouble with school, work, or the law because of their use.<br> <br>
        
        Recovery means to return to health and is a process of going from using to sobriety and a healthier lifestyle.</p>
      <p>&nbsp;</p>
      <p class="text-center"><a class="btn btn-secondary" href="#" role="button"> <img src="images/phone.svg" alt=""/>&nbsp; &nbsp;Contact Us</a> </p>
    </div>
    <div class="col-lg-8"> <img class="img-fluid" src="images/top-image-substance.png" alt="Enriching lives through wellness, recover, and hope."/><!--width="684" height="300"--> 
      
    </div>
  </div>
</div>
</div>
<div class="row">
<div class="col justify-content-start breadcrumb-menu">
  <ul >
    <li><a href="#">Home</a></li>
    <li><a >&gt;</a></li>
    <li><a href="#">SERVICES</a></li>
    <li><a >&gt;</a></li>
    <li><a href="#">SUBSTANCE ABUSE SERVICES</a></li>
  </ul>
</div>
<div class="col justify-content-end" id="contact-flags">
  <div class="icon-square"><a id="phone-square" href="#"><img src="images/spacer.png"  alt=""/></a></div>
  <div class="icon-square"><a id="map-square" href="#map-square-map"><img src="images/spacer.png"  alt=""/></a></div>
  <div class="icon-square"><a id="facebook-square" href="#"><img src="images/spacer.png" alt=""/></a></div>
</div>
<!-- <div id="map-square-map" style="background-color:#003366; padding:10px 10px 5px 5px; color:#fff;">
 <div class="col">
    <h7 >Southwest Counseling Services - <strong>Main Office</strong></h7> <br>
    <h7>2300 Foothill Blvd. Rock Springs, WY 82901</h7><br>
    <h7>307.352.6677</h7>
    <div>&nbsp;</div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.5914664102224!2d-109.26482877544296!3d41.578085622542986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875a61721ad81d6f%3A0xc1abc141307a6f6!2sSouthwest%20Counseling%20Services!5e0!3m2!1sen!2sus!4v1584149189405!5m2!1sen!2sus" width="350" height="300" frameborder="0" style="border:2px solid #000;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </div>
</div>--> 
</div>
</header>
<section class="header-title">
<div class="container">
<div class="row">
  <div class="col">
    <hr class="black-line-thin">
  </div>
  <div class="col-6 align-content-center" >
    <h3 class="text-center">SUBSTANCE ABUSE SERVICES</h3>
  </div>
  <div class="col">
    <hr class="black-line-thin">
  </div>
</div>
</div>
<div class="container">
<div class="row">
  <div >
    <p></p>
  </div>
</div>
<div class="row">
  <div class="col" style="min-width:250px;">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel </p>
  </div>
  <div class="col" style="min-width:250px;">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel </p>
  </div>
  <div class="col" style="min-width:250px;">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel </p>
  </div>
</div>
</div>
</section>
<section class="services-provided">
<div class="jumbotron payment">
<hr class="orange-line">
<div class="blue-title">
  <div class="container">
    <h5>SERVICES PROVIDED</h5>
  </div>
</div>
<div class="container">
  <div class="row text-center mr-auto justify-content-center blue-background" style="padding:15px 0 15px 0;">
    <div class="col">
      <div class="services-text" > <a class="services-a" href="#drug-assessment" title="">
        <div class="d-flex ">
          <div class="col services-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"><span >Drug &amp; Alcohol Assessment</span></div>
        </div>
        </a> </div>
      <div class="services-text" > <a class="services-a" href="#emergency-services" title="">
        <div class="d-flex ">
          <div class="col services-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"><span>Emergency Services </span></div>
        </div>
        </a> </div>
      <div class="services-text" > <a class="services-a" href="#" title="">
        <div class="d-flex ">
          <div class="col services-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"> <span >Substance Abuse Treatment</span></div>
        </div>
        </a> 
  </div>
      <div class="services-text" > <a class="services-a" href="#residential-treatment" title="">
        <div class="d-flex ">
          <div class="col services-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"><span>Residential Treatment </span></div>
        </div>
        </a> 
  </div>
    </div>
    <div class="col">
      <div class="services-text" > <a class="services-a" href="#" title="">
        <div class="d-flex ">
          <div class="col services-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"><span >DUI Class</span></div>
        </div>
        </a> 
  </div>
      <div class="services-text" > <a class="services-a" href="#" title="">
        <div class="d-flex ">
          <div class="col services-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"><span>Intensive Outpatient Program (IOP)</span></div>
        </div>
        </a> 
  </div>
      <div class="services-text" > <a class="services-a" href="#" title="">
        <div class="d-flex ">
          <div class="col services-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"> <span >Continuing Care</span></div>
        </div>
        </a> </div>
      <div class="services-text" > <a class="services-a" href="#" title="">
        <div class="d-flex ">
          <div class="col services-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"><span>Corrective Thinking</span></div>
        </div>
        </a> 
  </div>
    </div>
    <div class="col">
      <div class="services-text" > <a class="services-a" href="#" title="">
        <div class="d-flex ">
          <div class="col services-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"><span>Relapse Prevention</span></div>
        </div>
        </a> </div>
      <div class="services-text" > <a class="services-a" href="#jail-treatment" title="">
        <div class="d-flex ">
          <div class="col services-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"><span>Jail Based Treatment </span></div>
        </div>
        </a> </div>
      <div class="services-text" > <a class="services-a" href="#" title="">
        <div class="d-flex ">
          <div class="col services-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"> <span >Recovery Skills</span></div>
        </div>
        </a>
  </div>
    </div>
  </div>
</div>
</div>
</section>
<section class="conditions-treat">
<div class="row top-bottom-border" >
<div class="col-sm-6 col-lg-6"> <img src="images/stock-photo-recovery-written-on-the-road-300681833.jpg" width="100%"  alt=""/> </div>
<div class="col-sm-6 col-lg-6">
  <p></p>
  <h5>RECOVERY FOCUS</h5>
  <hr class="orange-line-thin" style="width:200px">
  <p style="margin-right: 40px;"><strong>Our recovery services focus on all types of substance abuse addiction such as:</strong></p>
  <p></p>
  <div class="d-flex">
    <div class="col">
      <ul>
        <li>Alcohol</li>
        <li>Barbiturates</li>
        <li>Cocaine</li>
        <li>Crack</li>
        <li>Ecstasy</li>
        <li>Heroin</li>
        <li>Inhalants</li>
        <li>LSD</li>
        <li>Marijuana</li>
        <li>Methamphetamines</li>
        <li>Opiates</li>
        <li>Other substances</li>
        <li>Over-the-counter medication</li>
        <li>Oxycontin</li>
      </ul>
    </div>
    <div class="col">
      <ul>
        <li>Painkillers</li>
        <li>PCP</li>
        <li>Prescription drugs</li>
        <li>Ritalin</li>
        <li>Steroids</li>
        <li>Tobacco</li>
        <li>Vicodin</li>
        <li>Xanax</li>
      </ul>
      <p></p>
      <div class="text-center"> <a class="btn btn-primary btn-block button-orange-sm" href="#" title=""> <img src="images/phone.svg" alt=""/>&nbsp; &nbsp;Call Now</a> </div>
      <p></p>
      <div class="text-center"> <a class="btn btn-primary btn-block button-orange-sm"  href="#" title=""> Download Brochure</a> </div>
    </div>
  </div>
</div>
</div>
</section>
<section class="survey-section">
<div class="container">
<div class="row">
    <p>&nbsp;</p>
</div>
<div class="row no-gutters"  >
  <div class="col d-flex survey-box" >
    <div class="col" style="padding:0;"> <img alt="" style="width: 300px; margin:0; padding:0 " src="images/stock-photo-sad-young-man-in-white-t-shirt-is-looking-at-glass-of-beer-while-sitting-at-bar-counter-in-pub-in-386500174.jpg"  data-holder-rendered="true"> </div>
    <div class="col align-self-center">
      <p class="text-center" style="font-size: 18px;">Has your drinking <br>
        become a problem?</p>
      <p class="text-center"><a class="btn button-white" href="#" role="button">Find Out</a> </p>
    </div>
  </div>
  <div class="col d-flex survey-box" >
    <div class="col" style="padding:0;"> <img alt="" style="width: 300px; " src="images/stock-photo-a-woman-sitting-alone-and-depressed-345397208.jpg" data-holder-rendered="true"> </div>
    <div class="col align-self-center" >
      <p class="text-center" style="font-size: 18px;">Is your sadness normal?</p>
      <p class="text-center"><a class="btn button-white" href="#" role="button">Find Out</a> </p>
    </div>
  </div>
</div>
<div class="row no-gutters" >
  <div class="col d-flex survey-box">
    <div class="col" style="padding:0;"> <img alt="" style="width: 300px; margin:0; padding:0 " src="images/stock-photo-a-young-sales-person-in-elegant-suit-sitting-with-paper-on-top-of-a-stone-in-the-clouds-concept-496908091.jpg" data-holder-rendered="true"> </div>
    <div class="col align-self-center">
      <p class="text-center" style="font-size: 18px;">Do you isolate <br>
        yourself too much?</p>
      <p class="text-center"><a class="btn button-white" href="#" role="button">Find Out</a> </p>
    </div>
  </div>
  <div class="col d-flex survey-box">
    <div class="col" style="padding:0;"> <img alt="" style="width: 300px;" src="images/stock-photo-man-comforting-his-depressed-friend-in-bar-388576783.jpg" data-holder-rendered="true"> </div>
    <div class="col align-self-center" >
      <p class="text-center" style="font-size: 18px;">Do you feel like people would be happier without you?</p>
      <p class="text-center"><a class="btn button-white" href="#" role="button">Find Out</a> </p>
    </div>
  </div>
</div>
</div>
</section>
<section  class="group-section">
<div class="jumbotron payment" >
<hr class="orange-line">
<div class="blue-title">
  <div class="container">
    <h5>GROUPS</h5>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm-6 col-lg-6">
      <p>&nbsp;</p>
      <div class="col group-list">
        <ul>
          <li><a href="#">DUI Class</a></li>
          <li><a href="#">Intensive Outpatient Program (IOP)</a></li>
          <li><a href="#">Continuing Care</a></li>
          <li><a href="#">Corrective Thinking</a></li>
          <li><a href="#">Adolescent Continuing Care</a></li>
          <li><a href="#">Relapse Prevention </a></li>
          <li><a href="#">Alcohol &amp; Drugs</a></li>
          <li><a href="#">Recovery Skills</a></li>
        </ul>
      </div>
    <a class="btn btn-secondary" href="#" role="button" style="margin-left:40px;"> <img src="images/phone.svg" alt=""/>&nbsp; &nbsp;Contact Us</a>
      <p>&nbsp;</p>
    </div>
    <div class="col-sm-6 col-lg-6 text-center" style="margin-top:20px; ">
  <a href="#" ><img  src="images/calendar-img.png" width="100%" alt="Calendar"/></a> 
  </div>
  <div><p>&nbsp;</p></div>
 
  </div>
</div>
</div>
</section>
  
<section class="do-not-wait">
<div class="jumbotron waitSection">
<div class="container">
  <div class="flex-column">
    <p>&nbsp;</p>
    <div class="text-center mx-auto">
      <h3 >Don't Wait For Tomorrow.</h3>
    </div>
    <div class="text-center mx-auto">
      <p class="lead">Recovery can start today!</p>
    </div>
    <div class="col-sm-4 text-center mx-auto"> <a class="btn btn-primary btn-block button-orange-sm" href="#" title=""> <img src="images/phone.svg" alt=""/>&nbsp; &nbsp;307.352.6677</a> </div>
    <p>&nbsp;</p>
  </div>
</div>
</div>
</section>

<section  class="faq-section">
<div class="jumbotron faq" id="faq1">
<hr class="orange-line">
<div class="blue-title">
  <div class="container">
    <h5>FREQUENTLY  ASKED QUESTSIONS</h5>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col">
      <div class="faq-text accordion" > <a class="faq-a" href="#faq1" title="">
        <div class="d-flex ">
          <div class="col faq-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"><span >What is mental health?</span></div>
        </div>
        </a>
        <div class="faq-content">
          <p>A person who is mentally healthy can generally manage stress, respond appropriately to problems in life, and express emotions in a healthy, productive way. If a person runs into trouble with these sorts of tasks, or has a problem that just can’t be solved, therapy may be a good option to improve mental health.</p>
        </div>
      </div>
      <div class="faq-text accordion"> <a class="faq-a"  href="#faq1"  title="">
        <div class="d-flex ">
          <div class="col faq-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"><span >What can I expect at my first appointment?</span></div>
        </div>
        </a>
        <div class="faq-content">
          <p>Plan on spending about two hours at your first appointment. You will be asked to fill out some forms for our agency, including your consent to have treatment at Southwest Counseling Service.</p>
          <p> You will meet with a mental health clinician who will complete an assessment with you on the computer. This person will ask you questions about your history and your reasons for coming in for counseling. At the end of the session, you and your clinician will talk about options for treatment and your treatment plan.</p>
        </div>
      </div>
      <div class="faq-text accordion"> <a class="faq-a"   href="#faq1"  title="">
        <div class="d-flex ">
          <div class="col faq-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"><span >What is a sliding fee scale?</span></div>
        </div>
        </a>
        <div class="faq-content">
          <p>This is a subsidized fee scale based on gross household income and the number of people in the household. This is offered because we are partially funded by the state.</p>
        </div>
      </div>
      <div class="faq-text accordion"> <a class="faq-a"  href="#faq1" title="">
        <div class="d-flex ">
          <div class="col faq-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"><span >What about confidentiality?</span></div>
        </div>
        </a>
        <div class="faq-content">
          <p>Southwest Counseling Service takes your privacy very seriously, and we work hard to protect your confidentiality. Your information is kept in secure files, and is not shared with anyone without your consent.</p>
          <p> There are some exceptions to that, which are legal reasons that your clinician would have to share information about you without your consent. Those include, but are not limited to, a serious medical emergency or threat to life, legally reportable information about child or adult neglect, or if there is a valid court order requiring information.</p>
          <p> Sometimes people come to Southwest Counseling Service as a result of a court order or because of legal problems. If that is the case, we will usually have you sign a release of information form allowing us to contact your referral source about your therapy. This is often necessary to let the referral source know that you are attending therapy and how you are progressing.</p>
          <p> For more information about all of the limits to confidentiality, as well as information about the employee code of ethics, please view the client information guide.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="faq-text accordion"> <a class="faq-a"   href="#faq1"  title="">
        <div class="d-flex ">
          <div class="col faq-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"><span >How do I make an appointment?</span></div>
        </div>
        </a>
        <div class="faq-content">
          <p>You can make an appointment by calling any of our offices directly.</p>
        </div>
      </div>
      <div class="faq-text accordion"> <a class="faq-a"   href="#faq1"  title="">
        <div class="d-flex ">
          <div class="col faq-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"><span >How much does a drug and alcohol evaluation cost?</span></div>
        </div>
        </a>
        <div class="faq-content">
          <p>The total cost for this evaluation is $240. You may make payment arrangements with the clerical staff if you will not be able to pay in full. Also, please be aware that we will notify referral resources, such as probation, courts, etc., of payment and non-payment.</p>
          <p> Finally, if you have had an evaluation or addiction severity index (ASI) assessment completed in the past three months, SCS will require a copy and there will be no additional charge for this portion of the assessment. The cost with a previous ASI included is based on our sliding fee scale.</p>
        </div>
      </div>
      <div class="faq-text accordion"> <a class="faq-a" href="#faq1"  title="">
        <div class="d-flex ">
          <div class="col faq-1" width="25px" ><img src="images/spacer32.png" width="32" height="32" alt=""/></div>
          <div class="col-11 align-middle"><span >What is residential treatment?</span></div>
        </div>
        </a>
        <div class="faq-content">
          <p>Rosen Recovery, Therapeutic Community, and Women’s Addiction Program are all residential treatment programs where individuals reside in Southwest Counseling Service housing during the substance abuse treatment program. Each program has various lengths of stay ranging from four months to more than one year.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
<section class="quote-section">
<div class="jumbotron payment">
<div class="container left-right-padding" >
  <div class="row text-left mr-auto blue-background" style="padding:20px 0 20px 0; color:#000;">
    <h4>You cannot recover from anxiety by just staying calm. You cannot recover from depression by just being positive. You cannot recover from anorexia nervosa by just eating more.</h4>
    <h4>If mental illnesses were that simple, we wouldn't be struggling in the first place.</h4>
  </div>
</div>
</div>
</section>
<section id="emergency-services">
<div class="row top-bottom-border" >
<div class="col-sm-6 col-lg-6 left-right-padding" style="padding-top:20px;">
  <h5>EMERGENCY SERVICES</h5>
  <hr class="orange-line-thin" style="width:240px;">
  <p class="mb-0">A crisis can happen at any time of the day. Southwest Counseling Service provides emergency services 24 hours a day, seven days a week. Contact our on-call clinician by calling (307) 352-6680 or (307) 875-5515. <br>
    <br>
    A crisis can be caused by things that are unexpected or sudden. Emergency services typically include walk-in services, phone intervention, hospital consultations, and brief crisis counseling. Our emergency services can help with the following: </p>
  <p></p>
  <div class="d-flex">
    <div class="col" style="padding-left:0px;">
      <ul>
        <li>Anxiety attacks</li>
        <li>Chronic mental illness </li>
        <li>Crisis intervention</li>
        <li>Depression </li>
        <li>Divorce stress </li>
        <li>Family crisis </li>
      </ul>
    </div>
    <div class="col" style="padding-left:0px;">
      <ul>
        <li>Substance abuse</li>
        <li>Suicidal thoughts</li>
        <li>Trauma </li>
        <li>Unemployment stress </li>
        <li>Workplace crisis </li>
        <li> Youth / adolescent issues</li>
      </ul>
      <p></p>
    </div>
  </div>
</div>
<div class="col-sm-6 col-lg-6"> <img src="images/stock-photo-depressed-and-sad-woman-alone-in-the-mountain-with-a-gray-cloudy-background-192263282.jpg" width="100%"  alt=""/> </div>
</div>
</section>
<section id="drug-assessment">
<div class="jumbotron payment">
<hr class="orange-line">
<div class="blue-title">
  <div class="container">
    <h5>DRUG &amp; ALCOHOL ASSESSMENTS</h5>
  </div>
</div>
<div class="container left-right-padding" >
  <div class="row text-left mr-auto blue-background" style="padding:15px 0 15px 0; color:#000;">
    <p>Southwest Counseling Service provides comprehensive drug and alcohol assessments to all individuals seeking substance abuse treatment in order to determine the most appropriate course of treatment. Assessments are based on a comprehensive biopsychosocial tool utilizing the Addictions Severity Index (ASI) and the American Society of Addiction Medicine (ASAM) patient placement criteria. Treatment recommendations can include:</p>
    <p></p>
    <div style="padding-left:0px;">
      <ul>
        <li>Individual therapy</li>
        <li>Intensive group therapy</li>
        <li>Residential treatment (short and long term)</li>
      </ul>
    </div>
  </div>
</div>
</div>
</section>
<section id="jail-treatment">
<div class="row top-bottom-border" >
<div class="col-sm-6 col-lg-6"> <img src="images/stock-vector-concept-of-the-prison-with-the-arrest-of-a-criminal-the-prisoner-is-sitting-in-his-cell-and-1349712146.jpg" width="100%"  alt=""/> </div>
<div class="col-sm-6 col-lg-6 left-right-padding" style="">
  <div > &nbsp; </div>
  <h5>JAIL BASED TREATMENT</h5>
  <hr class="orange-line-thin" style="width:240px;">
  <p class="mb-0">Jail Based Treatment is a gender specific substance abuse treatment program at the Sweetwater County Detention Center. <br>
    <br>
    Criteria
    Individuals can express interest while incarcerated or can be court ordered to attend. They must have a drug and alcohol evaluation. The program lasts approximately four months. <br>
    <br>
    For more information, contact our Foothill Location at (307) 352-6677.</p>
  <p>&nbsp;</p>
  <div class="text-center mx-auto"> <a class="btn btn-primary btn-block button-orange-sm" href="#" title=""> <img src="images/phone.svg" alt=""/>&nbsp; &nbsp;307.352.6677</a> </div>
</div>
</div>
</section>
<section id="residential-treatment">
<div class="jumbotron orangeBack" >
<hr class="orange-line">
<div class="blue-title">
  <div class="container">
    <h5>RESIDENTIAL TREATMENT PROGRAMS</h5>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm-6 col-lg-6">
      <p></p>
      <p>Residential treatment programs are one of the most effective methods of achieving long-term recovery from addiction. Southwest Counseling Service provides three residential treatment programs for adult men and women suffering from substance abuse/dependency depending on each individual’s needs.</p>
      <p>
      <h6 ><strong>Therapeutic Community</strong></h6>
      The Therapeutic Community is a long-term, six- to 12-month residential treatment program for individuals with severe substance abuse disorders and criminal behavior. It is highly structured, confrontational, and an effective alternative to jail or prison.
      </p>
      <p>
      <h6 ><strong>Women’s Addiction Program</strong></h6>
      Southwest Counseling Service’s Women’s Addiction Program was the first program in the state of Wyoming that allowed pregnant women and mothers with substance abuse addiction to receive intensive residential treatment while maintaining their responsibilities to their children. The children are in the program with their mothers, allowing the women the opportunity to enhance parenting and life skills.
      </p>
    </div>
    <div class="col-sm-6 col-lg-6">
      <p>
      <h6 ><strong>Benefits</strong></h6>
      Our residential treatment programs offer a number of other benefits:
      </p>
      <div class="col group-list">
        <ul>
          <li> They offer support 24 hours a day, seven days a week.</li>
          <li>They offer a variety of services giving holistic care to the individual.</li>
          <li>They provide a safe environment for individuals to leave their harmful environment and focus on helping themselves and their recovery.</li>
          <li>The therapeutic community allows individuals to live and learn with the support of other recovering addicts. 
            Treatment provides daily structure and support while individuals deal with addiction. This also helps recovering addicts rebuild their lives after treatment. </li>
        </ul>
      </div>
      <p>For more information on these programs, please call (307) 352-6677.</p>
      <p>&nbsp;</p>
      <div class="text-center mx-auto"> <a class="btn btn-secondary" href="#" role="button" > <img src="images/phone.svg" alt=""/>&nbsp; &nbsp;Contact Us</a> </div>
      <p>&nbsp;</p>
    </div>
  </div>
</div>
</div>
</section>
<section  class="service-icons">
<div class="container">
<div class="row">
  <div >
    <h5>SERVICES</h5>
  </div>
</div>
<div class="row" style="margin-bottom:10px" >
  <div class="col top-padding"> <a href="evaluations.html" >
    <div class="servicesSection"><img alt="" src="images/evaluations-blue.png"  data-holder-rendered="true">
      <p>EVALUATIONS &amp; ASSESSMENTS</p>
    </div>
    </a> </div>
  <div class="col top-padding"> <a href="mental-health.html" >
    <div class="servicesSection"><img alt="" src="images/mentalHealth-blue.png" data-holder-rendered="true">
      <p>MENTAL HEALTH</p>
    </div>
    </a> </div>
  <div class="col top-padding"> <a href="substance-abuse.html" >
    <div class="servicesSection"><img alt="" src="images/substanceAbuse-blue.png"  data-holder-rendered="true">
      <p>SUBSTANCE ABUSE</p>
    </div>
    </a> </div>
  <div class="col top-padding"> <a href="child-adolescents" >
    <div class="servicesSection"> <img alt="" src="images/children-blue.png" data-holder-rendered="true">
      <p>CHILDREN &amp; ADOLESCENTS</p>
    </div>
    </a> </div>
</div>
<div class="row" style="margin-bottom:20px" >
  <div class="col top-padding"> <a href="psychosocial.html" >
    <div class="servicesSection"><img alt="" src="images/psychosocial-blue.png"  data-holder-rendered="true">
      <p>PSYCHOSOCIAL</p>
    </div>
    </a> </div>
  <div class="col top-padding"> <a href="prevention.html" >
    <div class="servicesSection"><img alt="" src="images/prevention-blue.png" data-holder-rendered="true">
      <p>PREVENTION</p>
    </div>
    </a> </div>
  <div class="col top-padding"> <a href="medical-services" >
    <div class="servicesSection"><img alt="" src="images/medicalServices-blue.png"  data-holder-rendered="true">
      <p>MEDICAL SERVICES</p>
    </div>
    </a> </div>
  <div class="col top-padding"> <a href="employment.html" >
    <div class="servicesSection"> <img alt="" src="images/employment-blue.png" data-holder-rendered="true">
      <p>EMPLOYMENT</p>
    </div>
    </a> </div>
</div>
</div>
</section>
<script src="js/jquery-3.4.1.min.js"></script> 
<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/popper.min.js"></script> 
<script src="js/bootstrap-4.4.1.js"></script>
<script type="text/javascript" src="js/test.js"></script> 
<script src="js/function.js"></script> 
<script src="js/test.js"></script>
</html>
` }

const routes = [
    { path: '/', component: Index },
    { path: '/substance-abuse', component: SubstanceAbuse }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    el: '#vue_index',
    data: {
      showHome: true,
      showSubstanceAbuse: false
    }
}).$mount('#vue_index')