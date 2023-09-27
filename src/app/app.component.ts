import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class=" bg-darkgray h-screen  md:overflow-visible lg:overflow-hidden ">
      <div
        class="  flex  justify-items-end justify-center  w-1/2 py-6 right-0  xs:relative lg:fixed"
      >
        <div class="grid md:grid-cols-2 lg:grid-cols-4 w-96   ">
          <a class="anchor">Home</a>
          <a class="anchor">Who Am I</a>
          <a class="anchor">Projects</a>
          <a class="anchor">Blogs</a>
        </div>
      </div>
      <div class=" grid   md:grid-cols-1 md:overflow-visible lg:grid-cols-2 ">
        <img
          class="rounded-b-full  -ml-8 bottom-0  mt-40 shadow-2xl shadow-slate-600  md:h-3/4 md:w-2/3 "
          src="assets/my-pic.png"
          alt=""
        />
        <div class="oval-div ">
          <div class="justify-center flex  flex-col">
            <div class="px-24 flex flex-wrap">
              <p class="text-white text-3xl font-bold flex-wrap">
                Hello, I'm Dimakatso Sebatane,
              </p>
              <p class="text-white justify-start flex ">
                known in the digital world as <i>"blxck cicada"</i>
              </p>
            </div>
            <div class="w-96 justify-center flex mx-24 mt-12 flex-col ">
              <p class="text-white justify-center flex pb-6 flex-wrap">
                I'm a versatile professional with a passion for both development
                and penetration testing. With a strong foundation in these
                fields, I've embarked on a journey to explore and secure the
                digital realm.
              </p>
              <div class="justify-center flex">
                <button class="btn">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class AppComponent {
  title = 'PersonalPortfolio';
}
