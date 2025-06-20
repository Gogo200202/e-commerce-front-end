//import React, { useState, useEffect } form 'react'

export default async function about() {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <section className="bg-black">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold  text-white sm:text-4xl">
             За нас
              </h2>
              <p className="mt-4  text-white">
                Добре дошли  – мястото, където можете да
                дадете втори живот на прекрасни предмети и да откриете уникални
                находки на достъпни цени! Вярваме, че качеството не е
                задължително да бъде скъпо. Нашата мисия е да улесним
                пазаруването на стоки втора ръка, като същевременно подкрепяме
                устойчивия начин на живот и намаляваме отпадъците. Всеки
                артикул, който предлагаме, е внимателно подбран, за да
                гарантираме, че получавате само най-доброто. Присъединете се към
                нашата общност от осъзнати потребители и открийте колко лесно е
                да пазарувате умно, да спестявате пари и да допринасяте за една
                по-добра планета. Благодарим ви, че ни избрахте !
              </p>
              <div className="mt-8"></div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
