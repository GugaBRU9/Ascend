cmake_minimum_required(VERSION 3.28)

project(Ascend LANGUAGES CXX)

include(CTest)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

option(ASCEND_ENABLE_SANITIZERS "Enable AddressSanitizer and UBSan" OFF)

add_library(ascend_build_options INTERFACE)
target_compile_features(ascend_build_options INTERFACE cxx_std_20)

add_library(ascend_build_warnings INTERFACE)

if(MSVC)
  target_compile_options(ascend_build_warnings INTERFACE /W4 /permissive-)
else()
  target_compile_options(ascend_build_warnings INTERFACE -Wall -Wextra -Wpedantic)
endif()

if(ASCEND_ENABLE_SANITIZERS)
  if(CMAKE_CXX_COMPILER_ID MATCHES "Clang|GNU")
    target_compile_options(
      ascend_build_options
      INTERFACE
        -fsanitize=address,undefined
        -fno-omit-frame-pointer
    )
    target_link_options(
      ascend_build_options
      INTERFACE
        -fsanitize=address,undefined
        -fno-omit-frame-pointer
    )
  else()
    message(FATAL_ERROR "asan-ubsan preset requires Clang or GCC")
  endif()
endif()

add_subdirectory(src)

if(BUILD_TESTING)
  add_subdirectory(tests)
endif()
