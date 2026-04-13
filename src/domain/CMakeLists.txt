add_library(ascend_domain STATIC src/module_name.cpp)

target_include_directories(
  ascend_domain
  PUBLIC
    ${CMAKE_CURRENT_SOURCE_DIR}/include
)

target_link_libraries(
  ascend_domain
  PUBLIC
    ascend_build_options
    ascend_build_warnings
)
