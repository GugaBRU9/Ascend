add_library(ascend_content STATIC src/module_name.cpp)

target_include_directories(
  ascend_content
  PUBLIC
    ${CMAKE_CURRENT_SOURCE_DIR}/include
)

target_link_libraries(
  ascend_content
  PUBLIC
    ascend_build_options
    ascend_build_warnings
)
