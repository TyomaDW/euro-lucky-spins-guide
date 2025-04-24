import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

const CasinoShowcase = () => {
  return (
    <section className="py-12 bg-casinoDark">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
          Top 10 Online Casinos in the UK - April 2025
        </h2>
        
        <div className="space-y-6">
          {/* Casino Item 1 */}
          <div className="casino-item grid grid-cols-12 gap-3 p-4 items-center text-center bg-yellow-50 rounded-b-lg shadow-md text-sm">
            <div className="col-span-12 md:col-span-4 flex items-center justify-center md:justify-start space-x-2 md:space-x-4">
              <span className="badge whitespace-nowrap">BEST CHOICE</span>
              <a href="https://welcome.midnite.com/uk-big-bass-splash-bet-ps20-get-100-free-spins?utm_source=Affiliates&btag=a_574b_263c_3100371034418">
                <img src="https://resizer.valuetrackbi.com/s3:10bestcasinoscouk/assets/logo-midnitecasino-desktop.png/fit-in/?width=120" alt="Midnite Casino" className="max-w-[120px] mx-auto" />
              </a>
            </div>

            <a href="https://welcome.midnite.com/uk-big-bass-splash-bet-ps20-get-100-free-spins?utm_source=Affiliates&btag=a_574b_263c_3100371034396" className="col-span-12 md:col-span-2 bonus-info md:border-none border-b pb-2 md:pb-0">
              <p className="font-bold text-gray-700">Wager £20, Get 100 Free Spins</p>
              <div className="text-green-500 text-xs">New player offer - T&Cs apply</div>
              <div className="text-xs">18+, Begambleaware.org</div>
            </a>

            <div className="col-span-12 md:col-span-2 rating-info md:border-none border-b pb-2 md:pb-0">
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              <p className="text-xs">(4,894 Votes)</p>
            </div>

            <a href="https://welcome.midnite.com/uk-big-bass-splash-bet-ps20-get-100-free-spins?utm_source=Affiliates&btag=a_574b_263c_3100371034396" className="col-span-6 md:col-span-2 score-info flex flex-col items-center justify-center md:border-none border-r pr-2 md:pr-0">
              <span className="score-circle">98</span>
              <span className="text-xs">Our Score</span>
            </a>

            <div className="col-span-6 md:col-span-2 visit-site flex flex-col items-center justify-center pl-2 md:pl-0">
              <a href="https://welcome.midnite.com/uk-big-bass-splash-bet-ps20-get-100-free-spins?utm_source=Affiliates&btag=a_574b_263c_3100371034396" className="get-bonus-btn text-xs md:text-sm">GET BONUS</a>
              <p className="font-bold text-gray-500 text-xs">Min. Deposit - £20</p>
            </div>

            {/* Disclaimer */}
            <div className="col-span-12 text-[10px] text-gray-600 mt-2 px-2">
              New customers only. Opt in and wager £20 or more on selected games within 14 days of registration. Get 100 Free Spins for selected games, valued at 10p and valid for 7 days. T&Cs apply. BeGambleAware.org
            </div>
          </div>

          {/* Casino Item 2 */}
          <div className="casino-item relative grid grid-cols-12 gap-3 p-4 items-center text-center bg-white rounded-lg shadow-md text-sm border border-yellow-400">
            {/* Ribbon */}
            <div className="absolute top-0 left-0 bg-red-700 text-white text-[10px] font-semibold px-2 py-1" style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%)" }}>
              MOST POPULAR
            </div>

            <div className="col-span-12 md:col-span-4 flex items-center justify-center md:justify-start space-x-4">
              <div className="col-span-6 md:col-span-2 score-info flex flex-col items-center justify-center md:border-none border-r pr-2 md:pr-0">
                <span className="border border-yellow-400 rounded-full text-xl font-semibold w-12 h-12 flex items-center justify-center">2</span>
              </div>
              <a href="https://www.virgingames.com/promo/v4/a/slots-100fs-minireg-campaign/?&acquisition-channel=affiliate&btag=v_48583g_13151c_3100371036031&publisher_id=32731&creative_id=13151&agent_id=4&deal_type_id=1&utm_source=affiliate&utm_medium=IA&utm_campaign=48583&dclid=CIGX8sT5lYwDFTkEvwQdZlY2MQ">
                <img src="https://resizer.valuetrackbi.com/s3:10bestcasinoscouk/assets/provider_virgingames-2.png/fit-in?width=1920" alt="Virgin Games" className="max-w-[120px] mx-auto" />
              </a>
            </div>

            <a href="https://www.virgingames.com/promo/v4/a/slots-100fs-minireg-campaign/?&acquisition-channel=affiliate&btag=v_48583g_13151c_3100371036031&publisher_id=32731&creative_id=13151&agent_id=4&deal_type_id=1&utm_source=affiliate&utm_medium=IA&utm_campaign=48583&dclid=CIGX8sT5lYwDFTkEvwQdZlY2MQ" className="col-span-12 md:col-span-2 bonus-info md:border-none border-b pb-2 md:pb-0">
              <p className="font-bold text-gray-700">Play £10 & Get 100 Free Spins</p>
              <div className="text-green-500 text-xs">New player offer - T&Cs apply</div>
              <div className="text-xs">18+, Begambleaware.org</div>
            </a>

            <div className="col-span-12 md:col-span-2 rating-info md:border-none border-b pb-2 md:pb-0">
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              <p className="text-xs">(40,050 Votes)</p>
            </div>

            <a href="https://www.virgingames.com/promo/v4/a/slots-100fs-minireg-campaign/?&acquisition-channel=affiliate&btag=v_48583g_13151c_3100371036031&publisher_id=32731&creative_id=13151&agent_id=4&deal_type_id=1&utm_source=affiliate&utm_medium=IA&utm_campaign=48583&dclid=CIGX8sT5lYwDFTkEvwQdZlY2MQ" className="col-span-6 md:col-span-2 score-info flex flex-col items-center justify-center md:border-none border-r pr-2 md:pr-0">
              <span className="score-circle">97</span>
              <span className="text-xs">Our Score</span>
            </a>

            <div className="col-span-6 md:col-span-2 visit-site flex flex-col items-center justify-center pl-2 md:pl-0">
              <a href="https://www.virgingames.com/promo/v4/a/slots-100fs-minireg-campaign/?&acquisition-channel=affiliate&btag=v_48583g_13151c_3100371036031&publisher_id=32731&creative_id=13151&agent_id=4&deal_type_id=1&utm_source=affiliate&utm_medium=IA&utm_campaign=48583&dclid=CIGX8sT5lYwDFTkEvwQdZlY2MQ" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full">
                GET BONUS
              </a>
              <p className="font-bold text-gray-500 text-xs">Min. Deposit - £10</p>
            </div>

            {/* Disclaimer */}
            <div className="col-span-12 text-[10px] text-gray-600 mt-2 px-2">
              New members only, must opt in. Min £10 deposit & wager within 30 days from registration. Free Spins: on Double Bubble. 30-day expiry from credit. 1p coin size, max lines. Bingo: Advertised ticket value based on £1 tickets. Game availability & restrictions apply.
            </div>
          </div>

          {/* Casino Item 3 */}
          <div className="casino-item relative grid grid-cols-12 gap-3 p-4 items-center text-center bg-white rounded-lg shadow-md text-sm border border-yellow-400">
            {/* Ribbon */}
            <div className="absolute top-0 left-0 bg-red-700 text-white text-[10px] font-semibold px-2 py-1" style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%)" }}>
              EXCLUSIVE OFFER
            </div>

            <div className="col-span-12 md:col-span-4 flex items-center justify-center md:justify-start space-x-4">
              <div className="col-span-6 md:col-span-2 score-info flex flex-col items-center justify-center md:border-none border-r pr-2 md:pr-0">
                <span className="border border-yellow-400 rounded-full text-xl font-semibold w-12 h-12 flex items-center justify-center">3</span>
              </div>
              <a href="https://lp.betvictor.com/affiliates/welcome-offer-wager-10-get-40-plus-100-free-spins-jc53/?btagid=96271336&btag=a_58570b_14091c_3100371036680&affid=26945&nid=2&mid=2">
                <img src="https://resizer.valuetrackbi.com/s3:10bestcasinoscouk/assets/logo-betvictor.png/fit-in?width=1920" alt="BetVictor" className="max-w-[120px] mx-auto" />
              </a>
            </div>

            <a href="https://lp.betvictor.com/affiliates/welcome-offer-wager-10-get-40-plus-100-free-spins-jc53/?btagid=96271336&btag=a_58570b_14091c_3100371036680&affid=26945&nid=2&mid=2" className="col-span-12 md:col-span-2 bonus-info md:border-none border-b pb-2 md:pb-0">
              <p className="font-bold text-gray-700">£40 in Bonuses + 100 Free Spins</p>
              <div className="text-green-500 text-xs">New player offer - T&Cs apply</div>
              <div className="text-xs">18+, Begambleaware.org</div>
            </a>

            <div className="col-span-12 md:col-span-2 rating-info md:border-none border-b pb-2 md:pb-0">
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              <p className="text-xs">(37,564 Votes)</p>
            </div>

            <a href="https://lp.betvictor.com/affiliates/welcome-offer-wager-10-get-40-plus-100-free-spins-jc53/?btagid=96271336&btag=a_58570b_14091c_3100371036680&affid=26945&nid=2&mid=2" className="col-span-6 md:col-span-2 score-info flex flex-col items-center justify-center md:border-none border-r pr-2 md:pr-0">
              <span className="score-circle">95</span>
              <span className="text-xs">Our Score</span>
            </a>

            <div className="col-span-6 md:col-span-2 visit-site flex flex-col items-center justify-center pl-2 md:pl-0">
              <a href="https://lp.betvictor.com/affiliates/welcome-offer-wager-10-get-40-plus-100-free-spins-jc53/?btagid=96271336&btag=a_58570b_14091c_3100371036680&affid=26945&nid=2&mid=2" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full">
                GET BONUS
              </a>
              <p className="font-bold text-gray-500 text-xs">Min. Deposit - £10</p>
            </div>

            {/* Disclaimer */}
            <div className="col-span-12 text-[10px] text-gray-600 mt-2 px-2">
              18+ New customers only. Opt in, deposit, and wager a min of £10 on selected games within 7 days of registration. Get a 4x £10 Casino Bonus Funds for selected games, 40x wager, and 100 Free Spins on Big Bass Bonanza. Maximum withdrawal £1000. T&Cs apply. gambleaware.org | Please gamble responsibly
            </div>
          </div>

          {/* Casino Item 4 */}
          <div className="casino-item relative grid grid-cols-12 gap-3 p-4 items-center text-center bg-white rounded-lg shadow-md text-sm border border-yellow-400">

            {/* Ribbon */}
            <div className="absolute top-0 left-0 bg-red-700 text-white text-[10px] font-semibold px-2 py-1"
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%)" }}>
              FAST WITHDRAWALS
            </div>

            <div className="col-span-12 md:col-span-4 flex items-center justify-center md:justify-start space-x-4">
              <div
                className="col-span-6 md:col-span-2 score-info flex flex-col items-center justify-center md:border-none border-r pr-2 md:pr-0">
                <span
                  className="border border-yellow-400 rounded-full text-xl font-semibold w-12 h-12 flex items-center justify-center">4</span>

              </div>
              <a href="https://www.dreamvegas.com/?btag=a_37772b_228c_3100371037096&asys=ia&siteid=37772">
                <img src="https://resizer.valuetrackbi.com/s3:10bestcasinoscouk/assets/logo-dreamvegas.png/fit-in/?width=1920"
                  alt="Virgin Games" className="max-w-[120px] mx-auto" />
              </a>
            </div>

            <a href="https://www.dreamvegas.com/?btag=a_37772b_228c_3100371037096&asys=ia&siteid=37772"
              className="col-span-12 md:col-span-2 bonus-info md:border-none border-b pb-2 md:pb-0">
              <p className="font-bold text-gray-700">100% Match Bonus Up to £300 + 150 Bonus Spins</p>
              <div className="text-green-500 text-xs">New player offer - T&Cs apply</div>
              <div className="text-xs">18+, Begambleaware.org</div>
            </a>

            <div className="col-span-12 md:col-span-2 rating-info md:border-none border-b pb-2 md:pb-0">
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              <p className="text-xs">(38,909 Votes)</p>

            </div>

            <a href="https://www.dreamvegas.com/?btag=a_37772b_228c_3100371037096&asys=ia&siteid=37772"
              className="col-span-6 md:col-span-2 score-info flex flex-col items-center justify-center md:border-none border-r pr-2 md:pr-0">
              <span className="score-circle">94</span>
              <span className="text-xs">Our Score</span>
            </a>

            <div className="col-span-6 md:col-span-2 visit-site flex flex-col items-center justify-center pl-2 md:pl-0">
              <a href="https://www.dreamvegas.com/?btag=a_37772b_228c_3100371037096&asys=ia&siteid=37772"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full">
                GET BONUS
              </a>
              <p className="font-bold text-gray-500 text-xs">Min. Deposit - £20</p>
            </div>

            {/* Disclaimer */}
            <div className="col-span-12 text-[10px] text-gray-600 mt-2 px-2">
              18+. New players only. One offer per player. Max bonus bet £5. Offer: 100% bonus match on 1st
              deposit + bonus spins.
              Value of bonus & number of spins depend on deposit amount. Winnings from spins credited as bonus and
              capped at £100.
              Bonus funds are separate to Cash funds, and are subject to 35x wagering the total bonus & cash.
              Terms apply. Please
              Gamble Responsibly. BeGambleAware.org.
            </div>

          </div>

          {/* Casino Item 5 */}
          <div className="casino-item relative grid grid-cols-12 gap-3 p-4 items-center text-center bg-white rounded-lg shadow-md text-sm border border-yellow-400">



            <div className="col-span-12 md:col-span-4 flex items-center justify-center md:justify-start space-x-4">
              <div
                className="col-span-6 md:col-span-2 score-info flex flex-col items-center justify-center md:border-none border-r pr-2 md:pr-0">
                <span
                  className="border border-yellow-400 rounded-full text-xl font-semibold w-12 h-12 flex items-center justify-center">5</span>

              </div>
              <a
                href="https://welcome.32red.com/150-plus-25-spins-goldblitz/index.html?ch=affiliate&sub_ch=affiliate&campaignId=2949291&btag=320665458_521d70dba1af446ba01f9116e01104b3&sref=source&source=3100371041842&affiliateId=1&pid=97171512&bid=37532">
                <img src="https://resizer.valuetrackbi.com/s3:10bestcasinoscouk/assets/logo-32red-2.png/fit-in/?width=1920"
                  alt="Virgin Games" className="max-w-[120px] mx-auto" />
              </a>
            </div>

            <a href="https://welcome.32red.com/150-plus-25-spins-goldblitz/index.html?ch=affiliate&sub_ch=affiliate&campaignId=2949291&btag=320665458_521d70dba1af446ba01f9116e01104b3&sref=source&source=3100371041842&affiliateId=1&pid=97171512&bid=37532"
              className="col-span-12 md:col-span-2 bonus-info md:border-none border-b pb-2 md:pb-0">
              <p className="font-bold text-gray-700">150% Bonus Up to £150 + 25 Super Spins</p>
              <div className="text-green-500 text-xs">New player offer - T&Cs apply</div>
              <div className="text-xs">18+, Begambleaware.org</div>
            </a>

            <div className="col-span-12 md:col-span-2 rating-info md:border-none border-b pb-2 md:pb-0">
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              <p className="text-xs">(39,213 Votes)</p>

            </div>

            <a href="https://welcome.32red.com/150-plus-25-spins-goldblitz/index.html?ch=affiliate&sub_ch=affiliate&campaignId=2949291&btag=320665458_521d70dba1af446ba01f9116e01104b3&sref=source&source=3100371041842&affiliateId=1&pid=97171512&bid=37532"
              className="col-span-6 md:col-span-2 score-info flex flex-col items-center justify-center md:border-none border-r pr-2 md:pr-0">
              <span className="score-circle">94</span>
              <span className="text-xs">Our Score</span>
            </a>

            <div className="col-span-6 md:col-span-2 visit-site flex flex-col items-center justify-center pl-2 md:pl-0">
              <a href="https://welcome.32red.com/150-plus-25-spins-goldblitz/index.html?ch=affiliate&sub_ch=affiliate&campaignId=2949291&btag=320665458_521d70dba1af446ba01f9116e01104b3&sref=source&source=3100371041842&affiliateId=1&pid=97171512&bid=37532"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full">
                GET BONUS
              </a>
              <p className="font-bold text-gray-500 text-xs">Min. Deposit - £10</p>
            </div>

            {/* Disclaimer */}
            <div className="col-span-12 text-[10px] text-gray-600 mt-2 px-2">
              Invitation only. New accounts only. Min Deposit £10, 50x Wagering. Claim offer within 7 days, bonus
              expires after 30
              days, debit card or instant bank payment only. Game contributions vary, max. stake applies. 18+.
              BeGambleAware.org.
            </div>

          </div>

          {/* Casino Item 6 */}
          <div className="casino-item relative grid grid-cols-12 gap-3 p-4 items-center text-center bg-white rounded-lg shadow-md text-sm border border-yellow-400">



            <div className="col-span-12 md:col-span-4 flex items-center justify-center md:justify-start space-x-4">
              <div
                className="col-span-6 md:col-span-2 score-info flex flex-col items-center justify-center md:border-none border-r pr-2 md:pr-0">
                <span
                  className="border border-yellow-400 rounded-full text-xl font-semibold w-12 h-12 flex items-center justify-center">6</span>

              </div>
              <a
                href="https://mrq.com/newoffer/200-wager-free-spins/pots200?s1=3100371039273&s2=6_%2Fcompare.html&s3=&click=148557932&affid=2014&campaign=13&gclid=&msclkid=&lpage=9JdFp8&resource=&site=&referrer=https%3A%2F%2F10bestcasinos.co.uk%2F">
                <img src="https://resizer.valuetrackbi.com/s3:10bestcasinoscouk/assets/logo-mrq-desktop.png/fit-in?width=1920"
                  alt="Virgin Games" className="max-w-[120px] mx-auto" />
              </a>
            </div>

            <a href="https://mrq.com/newoffer/200-wager-free-spins/pots200?s1=3100371039273&s2=6_%2Fcompare.html&s3=&click=148557932&affid=2014&campaign=13&gclid=&msclkid=&lpage=9JdFp8&resource=&site=&referrer=https%3A%2F%2F10bestcasinos.co.uk%2F"
              className="col-span-12 md:col-span-2 bonus-info md:border-none border-b pb-2 md:pb-0">
              <p className="font-bold text-gray-700">Get 200 Cash Spins - No Wagering On Winnings!</p>
              <div className="text-green-500 text-xs">New player offer - T&Cs apply</div>
              <div className="text-xs">18+, Begambleaware.org</div>
            </a>

            <div className="col-span-12 md:col-span-2 rating-info md:border-none border-b pb-2 md:pb-0">
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              <p className="text-xs">(57,188 Votes)</p>

            </div>

            <a href="https://mrq.com/newoffer/200-wager-free-spins/pots200?s1=3100371039273&s2=6_%2Fcompare.html&s3=&click=148557932&affid=2014&campaign=13&gclid=&msclkid=&lpage=9JdFp8&resource=&site=&referrer=https%3A%2F%2F10bestcasinos.co.uk%2F"
              className="col-span-6 md:col-span-2 score-info flex flex-col items-center justify-center md:border-none border-r pr-2 md:pr-0">
              <span className="score-circle">93</span>
              <span className="text-xs">Our Score</span>
            </a>

            <div className="col-span-6 md:col-span-2 visit-site flex flex-col items-center justify-center pl-2 md:pl-0">
              <a href="https://mrq.com/newoffer/200-wager-free-spins/pots200?s1=3100371039273&s2=6_%2Fcompare.html&s3=&click=148557932&affid=2014&campaign=13&gclid=&msclkid=&lpage=9JdFp8&resource=&site=&referrer=https%3A%2F%2F10bestcasinos.co.uk%2F"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full">
                GET BONUS
              </a>
              <p className="font-bold text-gray-500 text-xs">Min. Deposit - £10</p>
            </div>

            {/* Disclaimer */}
            <div className="col-span-12 text-[10px] text-gray-600 mt-2 px-2">
              New customers only. Up to 200 spins over 4 day period from first deposit & spend of £10. Max 50
              spins each day on
              Fishin' BIGGER Pots of Gold at 10p per spin for 4 consecutive days. Deposit & spend £10 each day for
              50 spins. Spins
              credited upon spend of £10 each day. 18+ Full T&Cs apply.
            </div>

          </div>

          {/* Casino Item 7 */}
          <div className="casino-item relative grid grid-cols-12 gap-3 p-4 items-center text-center bg-white rounded-lg shadow-md text-sm border border-yellow-400">



            <div className="col-span-12 md:col-span-4 flex items-center justify-center md:justify-start space-x-4">
              <div
                className="col-span-6 md:col-span-2 score-info flex flex-col items-center justify-center md:border-none border-r pr-2 md:pr-0">
                <span
                  className="border border-yellow-400 rounded-full text-xl font-semibold w-12 h-12 flex items-center justify-center">7</span>

              </div>
              <a
                href="https://promo.boylesports.com/gaming/promo1/game22?btag=51640|5170f346096f43c1a8fec756bc73d646&ppc=3100371039525">
                <img src="https://resizer.valuetrackbi.com/s3:10bestcasinoscouk/assets/logo-boylesportscasino-desktop3.webp/fit-in/?width=1920"
