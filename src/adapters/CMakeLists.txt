add_library(ascend_adapters STATIC src/text_adapter_name.cpp)

target_include_directories(
  ascend_adapters
  PUBLIC
    ${CMAKE_CURRENT_SOURCE_DIR}/include
)

target_link_libraries(
  ascend_adapters
  PUBLIC
    ascend_build_options
    ascend_build_warnings
    ascend_session
)
