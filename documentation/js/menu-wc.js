'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">lms-learning-management-system documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-1f94798401d487e00fd52196adc2cb0080a331662d13fdb8a36759effb2a24eb2ab4abf9f1dfcff5816b69aeae1ad3d12690a8d25299b4feed5dfcaf47403be5"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-1f94798401d487e00fd52196adc2cb0080a331662d13fdb8a36759effb2a24eb2ab4abf9f1dfcff5816b69aeae1ad3d12690a8d25299b4feed5dfcaf47403be5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-1f94798401d487e00fd52196adc2cb0080a331662d13fdb8a36759effb2a24eb2ab4abf9f1dfcff5816b69aeae1ad3d12690a8d25299b4feed5dfcaf47403be5"' :
                                            'id="xs-controllers-links-module-AuthModule-1f94798401d487e00fd52196adc2cb0080a331662d13fdb8a36759effb2a24eb2ab4abf9f1dfcff5816b69aeae1ad3d12690a8d25299b4feed5dfcaf47403be5"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-1f94798401d487e00fd52196adc2cb0080a331662d13fdb8a36759effb2a24eb2ab4abf9f1dfcff5816b69aeae1ad3d12690a8d25299b4feed5dfcaf47403be5"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-1f94798401d487e00fd52196adc2cb0080a331662d13fdb8a36759effb2a24eb2ab4abf9f1dfcff5816b69aeae1ad3d12690a8d25299b4feed5dfcaf47403be5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-1f94798401d487e00fd52196adc2cb0080a331662d13fdb8a36759effb2a24eb2ab4abf9f1dfcff5816b69aeae1ad3d12690a8d25299b4feed5dfcaf47403be5"' :
                                        'id="xs-injectables-links-module-AuthModule-1f94798401d487e00fd52196adc2cb0080a331662d13fdb8a36759effb2a24eb2ab4abf9f1dfcff5816b69aeae1ad3d12690a8d25299b4feed5dfcaf47403be5"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesModule.html" data-type="entity-link" >CoursesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CoursesModule-1fbe1e42ed0894c1b0eb14af11335a76bc1081472909551122f377e03966aefbc3d32e639f1145afe09beb245794851f36fcee1d2622d8ef6e20646d999ee571"' : 'data-bs-target="#xs-controllers-links-module-CoursesModule-1fbe1e42ed0894c1b0eb14af11335a76bc1081472909551122f377e03966aefbc3d32e639f1145afe09beb245794851f36fcee1d2622d8ef6e20646d999ee571"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CoursesModule-1fbe1e42ed0894c1b0eb14af11335a76bc1081472909551122f377e03966aefbc3d32e639f1145afe09beb245794851f36fcee1d2622d8ef6e20646d999ee571"' :
                                            'id="xs-controllers-links-module-CoursesModule-1fbe1e42ed0894c1b0eb14af11335a76bc1081472909551122f377e03966aefbc3d32e639f1145afe09beb245794851f36fcee1d2622d8ef6e20646d999ee571"' }>
                                            <li class="link">
                                                <a href="controllers/CreateCoursesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateCoursesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/DeleteCourseByIdController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteCourseByIdController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/FindAllCoursesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindAllCoursesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/FindCourseByIdController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindCourseByIdController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UpdateCourseByIdController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateCourseByIdController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoursesModule-1fbe1e42ed0894c1b0eb14af11335a76bc1081472909551122f377e03966aefbc3d32e639f1145afe09beb245794851f36fcee1d2622d8ef6e20646d999ee571"' : 'data-bs-target="#xs-injectables-links-module-CoursesModule-1fbe1e42ed0894c1b0eb14af11335a76bc1081472909551122f377e03966aefbc3d32e639f1145afe09beb245794851f36fcee1d2622d8ef6e20646d999ee571"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoursesModule-1fbe1e42ed0894c1b0eb14af11335a76bc1081472909551122f377e03966aefbc3d32e639f1145afe09beb245794851f36fcee1d2622d8ef6e20646d999ee571"' :
                                        'id="xs-injectables-links-module-CoursesModule-1fbe1e42ed0894c1b0eb14af11335a76bc1081472909551122f377e03966aefbc3d32e639f1145afe09beb245794851f36fcee1d2622d8ef6e20646d999ee571"' }>
                                        <li class="link">
                                            <a href="injectables/CreateCourseUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateCourseUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DeleteCourseByIdUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteCourseByIdUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindAllCoursesUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindAllCoursesUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindCourseByIdUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindCourseByIdUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateCourseUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateCourseUseCase</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabaseModule-afa80e9b935d8940e806ae7e7d343a9d540d1788439e0387d442fa3bbdb80525a2e53e6a9b78deede3e415dec8a763bafec211deea24452b612602efffe9101b"' : 'data-bs-target="#xs-injectables-links-module-DatabaseModule-afa80e9b935d8940e806ae7e7d343a9d540d1788439e0387d442fa3bbdb80525a2e53e6a9b78deede3e415dec8a763bafec211deea24452b612602efffe9101b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-afa80e9b935d8940e806ae7e7d343a9d540d1788439e0387d442fa3bbdb80525a2e53e6a9b78deede3e415dec8a763bafec211deea24452b612602efffe9101b"' :
                                        'id="xs-injectables-links-module-DatabaseModule-afa80e9b935d8940e806ae7e7d343a9d540d1788439e0387d442fa3bbdb80525a2e53e6a9b78deede3e415dec8a763bafec211deea24452b612602efffe9101b"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaCourseRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaCourseRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaLessonRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaLessonRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaUserRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaUserRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LessonsModule.html" data-type="entity-link" >LessonsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LessonsModule-a0a7067fb560e1466687afdc724313a96483c1063d270181408c3a85294a6eada5d09814abcced7969c03a8a03f49ab94d5b838f85ce3e072d63f2365ab4f7d0"' : 'data-bs-target="#xs-controllers-links-module-LessonsModule-a0a7067fb560e1466687afdc724313a96483c1063d270181408c3a85294a6eada5d09814abcced7969c03a8a03f49ab94d5b838f85ce3e072d63f2365ab4f7d0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LessonsModule-a0a7067fb560e1466687afdc724313a96483c1063d270181408c3a85294a6eada5d09814abcced7969c03a8a03f49ab94d5b838f85ce3e072d63f2365ab4f7d0"' :
                                            'id="xs-controllers-links-module-LessonsModule-a0a7067fb560e1466687afdc724313a96483c1063d270181408c3a85294a6eada5d09814abcced7969c03a8a03f49ab94d5b838f85ce3e072d63f2365ab4f7d0"' }>
                                            <li class="link">
                                                <a href="controllers/CreateLessonsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateLessonsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/DeleteLessonByIdController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteLessonByIdController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/FindAllLessonsByCourseController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindAllLessonsByCourseController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/FindLessonByIdController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindLessonByIdController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LessonsModule-a0a7067fb560e1466687afdc724313a96483c1063d270181408c3a85294a6eada5d09814abcced7969c03a8a03f49ab94d5b838f85ce3e072d63f2365ab4f7d0"' : 'data-bs-target="#xs-injectables-links-module-LessonsModule-a0a7067fb560e1466687afdc724313a96483c1063d270181408c3a85294a6eada5d09814abcced7969c03a8a03f49ab94d5b838f85ce3e072d63f2365ab4f7d0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LessonsModule-a0a7067fb560e1466687afdc724313a96483c1063d270181408c3a85294a6eada5d09814abcced7969c03a8a03f49ab94d5b838f85ce3e072d63f2365ab4f7d0"' :
                                        'id="xs-injectables-links-module-LessonsModule-a0a7067fb560e1466687afdc724313a96483c1063d270181408c3a85294a6eada5d09814abcced7969c03a8a03f49ab94d5b838f85ce3e072d63f2365ab4f7d0"' }>
                                        <li class="link">
                                            <a href="injectables/CreateLessonUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateLessonUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DeleteLessonByIdUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteLessonByIdUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindAllLessonsByCourseUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindAllLessonsByCourseUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindLessonByIdUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindLessonByIdUseCase</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-e6a7fba328943b6e5788de447c2be10d8daab54986602f5f97a673fd62719baf9443245f21032d9a816792339cc232bf89d02326be348e702f67a87ab6e16108"' : 'data-bs-target="#xs-controllers-links-module-UserModule-e6a7fba328943b6e5788de447c2be10d8daab54986602f5f97a673fd62719baf9443245f21032d9a816792339cc232bf89d02326be348e702f67a87ab6e16108"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-e6a7fba328943b6e5788de447c2be10d8daab54986602f5f97a673fd62719baf9443245f21032d9a816792339cc232bf89d02326be348e702f67a87ab6e16108"' :
                                            'id="xs-controllers-links-module-UserModule-e6a7fba328943b6e5788de447c2be10d8daab54986602f5f97a673fd62719baf9443245f21032d9a816792339cc232bf89d02326be348e702f67a87ab6e16108"' }>
                                            <li class="link">
                                                <a href="controllers/CreateUserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/DeleteUserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteUserController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/FindAllUserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindAllUserController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/FindUserByIdController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindUserByIdController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UpdateUserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateUserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-e6a7fba328943b6e5788de447c2be10d8daab54986602f5f97a673fd62719baf9443245f21032d9a816792339cc232bf89d02326be348e702f67a87ab6e16108"' : 'data-bs-target="#xs-injectables-links-module-UserModule-e6a7fba328943b6e5788de447c2be10d8daab54986602f5f97a673fd62719baf9443245f21032d9a816792339cc232bf89d02326be348e702f67a87ab6e16108"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-e6a7fba328943b6e5788de447c2be10d8daab54986602f5f97a673fd62719baf9443245f21032d9a816792339cc232bf89d02326be348e702f67a87ab6e16108"' :
                                        'id="xs-injectables-links-module-UserModule-e6a7fba328943b6e5788de447c2be10d8daab54986602f5f97a673fd62719baf9443245f21032d9a816792339cc232bf89d02326be348e702f67a87ab6e16108"' }>
                                        <li class="link">
                                            <a href="injectables/CreateUserUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DeleteUserUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteUserUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindAllUsersUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindAllUsersUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindUserByIdUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindUserByIdUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateUserUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateUserUseCase</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/FindCourseByIdController.html" data-type="entity-link" >FindCourseByIdController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UpdateLessonByIdController.html" data-type="entity-link" >UpdateLessonByIdController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/Course.html" data-type="entity-link" >Course</a>
                            </li>
                            <li class="link">
                                <a href="classes/CourseRepository.html" data-type="entity-link" >CourseRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCourseDto.html" data-type="entity-link" >CreateCourseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLessonDto.html" data-type="entity-link" >CreateLessonDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Lesson.html" data-type="entity-link" >Lesson</a>
                            </li>
                            <li class="link">
                                <a href="classes/LessonRepository.html" data-type="entity-link" >LessonRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginAuthDto.html" data-type="entity-link" >LoginAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrismaCourseMapper.html" data-type="entity-link" >PrismaCourseMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrismaLessonMapper.html" data-type="entity-link" >PrismaLessonMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrismaUserMapper.html" data-type="entity-link" >PrismaUserMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCourseDto.html" data-type="entity-link" >UpdateCourseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLessonDto.html" data-type="entity-link" >UpdateLessonDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRepository.html" data-type="entity-link" >UserRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/viewModelCourse.html" data-type="entity-link" >viewModelCourse</a>
                            </li>
                            <li class="link">
                                <a href="classes/viewModelLesson.html" data-type="entity-link" >viewModelLesson</a>
                            </li>
                            <li class="link">
                                <a href="classes/ViewModelUser.html" data-type="entity-link" >ViewModelUser</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthMiddleware.html" data-type="entity-link" >AuthMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateLessonByIdUseCase.html" data-type="entity-link" >UpdateLessonByIdUseCase</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CourseSchema.html" data-type="entity-link" >CourseSchema</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateUserRequest.html" data-type="entity-link" >CreateUserRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LessonSchema.html" data-type="entity-link" >LessonSchema</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserSchema.html" data-type="entity-link" >UserSchema</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});