import React from 'react';
import "./NewsSect.css";
import { UncontrolledCarousel } from 'reactstrap';

export default function NewsSect() {
  return (
    <section className="background-color">
        <div>
            <h2 className="d-flex justify-content-center pt-5 news-header">Breaking News Around The World</h2>
        </div>
        <div className="col-10 col-lg-12 row mt-4 mx-auto pb-5 d-flex flex-column flex-lg-row justify-content-center story-container">
            <div className="story story1 h-100 mx-auto mb-5 col col-md-10 col-lg-3 offset-0 offset-lg-1 text-center">
                <h3 className="news-head"><a href="https://www.theonion.com/alabama-supreme-court-rules-that-frozen-burritos-are-ch-1851271293" target="_blank">Alabama Supreme Court Rules That Frozen Burritos Are Children</a></h3>
                <p className="d">MONTGOMERY, AL—In a case aimed at preserving what plaintiffs described as the sanctity of reheatable Tex-Mex fare, Alabama’s Supreme Court issued a ruling Tuesday in which it asserted that frozen burritos are children. “With this decision, the court finds that frozen burritos—be they beef, bean and cheese, chicken, or any combination thereof—are legally recognized as children,”</p>
            </div>
            <div className="story story2 h-100 mx-auto mb-5 col col-md-10 col-lg-4 text-center">
                <h3 className="news-head"><a href="https://www.theonion.com/removed-notre-dame-scaffolding-reveals-construction-cre-1851261775" target="_blank">Removed Notre Dame Scaffolding Reveals Construction Crew Accidentally Built Mosque</a></h3>
                <p className="d">PARIS—With a minaret protruding from atop the former Catholic cathedral as the repairs that followed a 2019 fire neared an end, the removal of scaffolding around Notre Dame revealed Friday that it had accidentally been rebuilt as a mosque. “Well, shit,” contractor Mathieu Renaud told reporters, explaining that he had wondered why all the blueprints for the restoration project were in Arabic instead of French.</p>
            </div>
            <div className="story story3 h-100 mx-auto mb-5 col col-md-10 col-lg-3 text-center">
                <h3 className="news-head"><a href="https://www.theonion.com/amazon-fires-employee-who-tested-positive-for-having-fo-1851049319" target="_blank">Amazon Fires Employee Who Tested Positive For Having Food In Their System</a></h3>
                <p className="d">AMAZON-Amazon has fired an employee who tested positive for having food in their system. The employee violated Amazon's strict, zero-tolerance policy against the use of food by their employees. This comes after she failed a routine, random food test. Amazon reminds employees, "Do not come to work under the influence of nourishment. Showing up to work fed can jeoporadize the safe starvation of their co-workers"</p>
            </div>
        </div>
        <div className="col-10 col-lg-12 row mt-4 mx-auto pb-5 d-flex flex-column flex-lg-row justify-content-center story-container">
            <div className="story story1 h-100 mx-auto mb-5 col col-md-10 col-lg-3 offset-0 offset-lg-1 text-center">
                <h3 className="news-head"><a href="https://www.theonion.com/waitstaff-watches-helplessly-as-limo-full-of-screaming-1851303980" target="_blank">Waitstaff Watches Helplessly As Limo Full Of Screaming 12-Year-Old Girls Pulls Up To Restaurant</a></h3>
                <p className="d">WILLOW GLEN, CA—Knowing full well that their fate had been sealed, local waitstaff at TGI Fridays watched helplessly Thursday as a limousine full of screaming 12-year-old girls pulled up in front of their restaurant. “Dear God, we’re doomed,” said head waiter James Orsen, who stood motionless as several preteens dressed in matching shirts sprinted past him and immediately piled into two separate booths where they began laughing, yelling, and knocking over various pieces of glassware. That middle-aged woman they came in with just sat at a separate table and ordered wine. She knows what’s up. At press time, an exhausted looking Orsen informed reporters he would be taking the rest of the night off after one of the giggling 12-year-olds told him he was cute and asked if he was on Snapchat.</p>
            </div>
            <div className="story story2 h-100 mx-auto mb-5 col col-md-10 col-lg-4 text-center">
                <h3 className="news-head"><a href="https://www.theonion.com/zelensky-challenges-putin-to-settle-ukraine-war-on-the-1851325870" target="_blank">Zelensky Challenges Putin To Settle Ukraine War On The Dance Floor</a></h3>
                <p className="d"><a href="https://www.theonion.com/zelensky-challenges-putin-to-settle-ukraine-war-on-the-1851325870" target="_blank">VIDEO</a></p>
            </div>
            <div className="story story3 h-100 mx-auto mb-5 col col-md-10 col-lg-3 text-center">
                <h3 className="news-head"><a href="https://www.theonion.com/secret-service-finds-biden-attempting-to-dig-own-grave-1851305493" target="_blank">Secret Service Finds Biden Attempting To Dig Own Grave On White House Lawn</a></h3>
                <p className="d"><a href="https://www.theonion.com/secret-service-finds-biden-attempting-to-dig-own-grave-1851305493">VIDEO</a></p>
            </div>
        </div>
    </section>
  )
}
